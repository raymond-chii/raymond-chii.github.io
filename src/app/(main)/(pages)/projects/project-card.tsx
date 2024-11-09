"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { getGithubREADME } from "@/components/get-readme";
import sdk from "@stackblitz/sdk";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  github?: {
    username: string;
    repo: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showReadme, setShowReadme] = useState(false);
  const [showStackBlitz, setShowStackBlitz] = useState(false);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const stackblitzContainerRef = useRef<HTMLDivElement>(null);
  const embedInstanceRef = useRef<any>(null);

  const fetchReadme = async () => {
    if (!project.github) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const content = await getGithubREADME({
        owner: project.github.username,
        repo: project.github.repo
      });
      
      if (!content) {
        throw new Error("Failed to load README");
      }
      
      setReadmeContent(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadmeToggle = async () => {
    if (!showReadme && !readmeContent && !error) {
      await fetchReadme();
    }
    setShowReadme(!showReadme);
    setShowStackBlitz(false);
  };

  const handleStackBlitzToggle = () => {
    setShowStackBlitz(!showStackBlitz);
    setShowReadme(false);
  };

  const loadStackBlitz = async () => {
    if (!project.github || !stackblitzContainerRef.current) return;

    try {
      // Clear previous content
      if (stackblitzContainerRef.current) {
        stackblitzContainerRef.current.innerHTML = '';
      }

      // Create a new container for StackBlitz
      const stackblitzDiv = document.createElement('div');
      stackblitzDiv.id = `stackblitz-${project.github.repo}`;
      stackblitzContainerRef.current.appendChild(stackblitzDiv);

      // Embed the project
      embedInstanceRef.current = await sdk.embedGithubProject(
        `stackblitz-${project.github.repo}`,
        `${project.github.username}/${project.github.repo}`,
        {
          height: 600,
          clickToLoad: true,
          terminalHeight: 50,
          theme: 'dark',
          hideNavigation: false,
          hideDevTools: false,
        }
      );
    } catch (err) {
      console.error('StackBlitz embedding error:', err);
      if (stackblitzContainerRef.current) {
        stackblitzContainerRef.current.innerHTML = `
          <div class="flex items-center justify-center h-[600px] text-red-400 bg-red-900/20 rounded-lg">
            Failed to load project in StackBlitz. The repository might not be compatible.
          </div>
        `;
      }
    }
  };

  useEffect(() => {
    if (showStackBlitz) {
      loadStackBlitz();
    }

    return () => {
      // Cleanup
      if (embedInstanceRef.current) {
        embedInstanceRef.current = null;
      }
      if (stackblitzContainerRef.current) {
        stackblitzContainerRef.current.innerHTML = '';
      }
    };
  }, [showStackBlitz, project.github]);

  const openInStackBlitz = async () => {
    if (project.github) {
      try {
        await sdk.openGithubProject(`${project.github.username}/${project.github.repo}`, {
          theme: 'dark',
          hideNavigation: false,
          hideDevTools: false,
        });
      } catch (err) {
        console.error('Failed to open project in StackBlitz:', err);
        alert('Failed to open project in StackBlitz. The repository might not be compatible.');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/80 transition-all group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold group-hover:text-blue-400">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
               className="hover:underline">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        {project.github && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleReadmeToggle}
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium px-4 py-2 rounded-full border border-blue-400/30 hover:border-blue-400/60"
            >
              {showReadme ? 'Hide README ↑' : 'Show README ↓'}
            </button>
            <button
              onClick={handleStackBlitzToggle}
              className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium px-4 py-2 rounded-full border border-green-400/30 hover:border-green-400/60"
            >
              {showStackBlitz ? 'Hide IDE ↑' : 'Open IDE ↓'}
            </button>
          </div>
        )}
      </div>
      
      <p className="text-gray-300 my-4 text-lg">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} 
                className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200">
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {showReadme && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6">
              {isLoading && (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              )}
              
              {error && (
                <div className="text-red-400 p-4 rounded bg-red-900/20 border border-red-500/20">
                  Error loading README: {error}
                </div>
              )}
              
              {!isLoading && !error && readmeContent && (
                <article 
                  className="markdown-content prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: readmeContent }}
                />
              )}
            </div>
          </motion.div>
        )}

        {showStackBlitz && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 relative">
              <button
                onClick={openInStackBlitz}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
              >
                Open in New Window
              </button>
              <div 
                ref={stackblitzContainerRef}
                className="w-full rounded-lg overflow-hidden"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;