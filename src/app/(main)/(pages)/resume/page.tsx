"use client";

import React, { useState } from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center mb-8"
        >
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>My Resume</h1>
            <p className="text-lg text-gray-400">View or download my resume</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <a 
            href="/SW Raymond Chi.pdf" 
            download="Raymond Chi Resume.pdf"
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-white group shadow-lg hover:shadow-blue-500/30"
          >
            <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
            Download Resume (PDF)
          </a>
          <a 
            href="/SW Raymond Chi.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 text-white group shadow-lg hover:shadow-gray-500/30"
          >
            <FaExternalLinkAlt className="mr-2 group-hover:scale-110 transition-transform" />
            Open in New Tab
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="resume-viewer mt-8 max-w-5xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src="/SW Raymond Chi.pdf#view=FitH"
                className="w-full h-full"
                style={{ minHeight: '80vh' }}
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </motion.div>
      </TracingBeam>
    </div>
  );
};

export default Resume;