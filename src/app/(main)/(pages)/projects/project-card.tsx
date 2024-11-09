"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { getGithubREADME } from "@/components/get-readme";

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
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          <button
            onClick={handleReadmeToggle}
            className="self-start sm:self-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium px-4 py-2 rounded-full border border-blue-400/30 hover:border-blue-400/60 whitespace-nowrap"
          >
            {showReadme ? 'Hide README ↑' : 'Show README ↓'}
          </button>
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
                  dangerouslySetInnerHTML={{ 
                    __html: readmeContent.replace(
                      /<img([^>]*)>/g, 
                      (match, group) => {
                        // Check if src is a relative path
                        const srcMatch = group.match(/src=['"]([^'"]*)['"]/);
                        if (srcMatch && !srcMatch[1].startsWith('http')) {
                          // Replace relative image paths with full GitHub raw content URLs
                          const fullUrl = `https://raw.githubusercontent.com/${project.github?.username}/${project.github?.repo}/main/${srcMatch[1]}`;
                          return match.replace(srcMatch[1], fullUrl);
                        }
                        return match;
                      }
                    )
                  }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;