import 'dotenv/config';
import { Project } from '../types/types';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function syncData() {
  try {
    console.log('Starting sync...');

    // First sync projects
    const projectsDir = path.join(__dirname, '..', 'projects');
    const projectFiles = fs.readdirSync(projectsDir)
      .filter(file => file.endsWith('.ts'));
    
    console.log(`Found ${projectFiles.length} projects to sync`);
    
    for (const file of projectFiles) {
      console.log(`Syncing project: ${file}`);
      const projectModule = await import(path.join(projectsDir, file));
      const projectName = file.replace('.ts', '');
      const project = projectModule[projectName];
      
      const { error: projectError } = await supabase
        .from('projects')
        .upsert({ 
          name: project.name,
          description: project.description,
          token_address: project.tokenAddress,
          keyword: project.keyword,
          github: project.github,
          twitter: project.twitter,
          website: project.website
        }, { 
          onConflict: 'name'
        });
      
      if (projectError) throw projectError;
    }

    console.log('Projects sync complete');

    // Then sync developers and their relationships
    const devsDir = path.join(__dirname, '..', 'developers');
    const devFiles = fs.readdirSync(devsDir)
      .filter(file => file.endsWith('.ts'));
    
    console.log(`Found ${devFiles.length} developers to sync`);

    for (const file of devFiles) {
      console.log(`Syncing developer: ${file}`);
      const devModule = await import(path.join(devsDir, file));
      const developer = devModule.developer;

      // First get existing developer data
      console.log(`Fetching existing data for: ${developer.github}`);
      const { data: existingDev } = await supabase
        .from('developers')
        .select('*')
        .eq('developer_github', developer.github.toLowerCase())
        .single();

      // Merge new data with existing data
      const devData = {
        developer_github: developer.github.toLowerCase(),
        developer_name: developer.name,
        image: developer.image,
        description: developer.description,
        twitter: developer.twitter,
        twitch: developer.twitch,
        youtube: developer.youtube,
        score: existingDev?.score ?? 0,
        os_repo_contributions: existingDev?.os_repo_contributions ?? 0
      };

      console.log(`Upserting developer: ${developer.github}`);
      const { error: devError } = await supabase
        .from('developers')
        .upsert(devData, { 
          onConflict: 'developer_github'
        });
      
      if (devError) throw devError;

      if (developer.projects && developer.projects.length > 0) {
        console.log(`Processing ${developer.projects.length} projects for ${developer.github}`);
        
        // Get project IDs from names
        const { data: projectData } = await supabase
          .from('projects')
          .select('id, name')
          .in('name', developer.projects.map((p: Project) => p.name));

        if (!projectData) {
          console.log(`No project data found for ${developer.github}`);
          continue;
        }

        console.log(`Found ${projectData.length} matching projects`);

        // Create developer-project relationships
        const relationships = projectData.map(project => ({
          developer_github: developer.github.toLowerCase(),
          project_id: project.id
        }));

        console.log(`Deleting existing relationships for ${developer.github}`);
        const { error: deleteError } = await supabase
          .from('developer_projects')
          .delete()
          .eq('developer_github', developer.github.toLowerCase());

        if (deleteError) throw deleteError;

        console.log(`Inserting ${relationships.length} new relationships`);
        const { error: insertError } = await supabase
          .from('developer_projects')
          .insert(relationships);

        if (insertError) throw insertError;
      }
    }

    console.log('Sync completed successfully');
  } catch (error) {
    console.error('Sync failed:', error);
    process.exit(1);
  }
}

syncData(); 