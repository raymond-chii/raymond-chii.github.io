"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { projectCategories } from "@/app/(main)/(pages)/projects/data";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { motion, AnimatePresence } from "framer-motion";

const CategoryButton = ({ name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
      "hover:shadow-lg transform hover:-translate-y-0.5",
      isActive 
        ? "bg-blue-600 text-white shadow-blue-500/50" 
        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    )}
  >
    {name}
  </button>
);

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/80 transition-all group"
  >
    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
      <a href={project.link} target="_blank" rel="noopener noreferrer" 
         className="hover:underline">
        {project.title}
      </a>
    </h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} 
              className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get all categories plus 'all'
  const categories = ['all', ...Object.keys(projectCategories)];

  // Get projects based on active category
  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projectCategories).flatMap(category => category.projects);
    }
    return projectCategories[activeCategory]?.projects || [];
  };

  const getCategoryTitle = (category: string) => {
    if (category === 'all') return 'All Projects';
    return projectCategories[category]?.title || '';
  };

  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <div className="relative z-10 text-center mb-12">
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>
              My Projects
            </h1>
            <p className="text-lg text-gray-400">
              A collection of my work across different domains
            </p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              name={getCategoryTitle(category)}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode='wait'>
              {getFilteredProjects().map((project, index) => (
                <ProjectCard key={`${activeCategory}-${index}`} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}