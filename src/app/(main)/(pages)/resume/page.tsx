"use client";

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { FaDownload } from 'react-icons/fa';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const Resume = () => {
  const toolbarPluginInstance = toolbarPlugin();

  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <div className="relative z-10 text-center mb-8">
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>My Resume</h1>
            <p className="text-lg text-gray-400">Download it from here</p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <a 
            href="/Raymond Chi resume.pdf" 
            target="_blank" 
            className="resume-link flex items-center justify-center p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300 text-white"
          >
            <FaDownload className="mr-2" /> Download Resume (PDF)
          </a>
        </div>
        <div className="resume-viewer mt-8 max-w-3xl mx-auto">
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">
            <div className="pdf-container bg-gray-100 p-4 rounded-lg overflow-y-auto" style={{ height: '80vh' }}>
              <toolbarPluginInstance.Toolbar />
              <Viewer fileUrl="/SW Raymond Chi.pdf" plugins={[toolbarPluginInstance]} />
            </div>
          </Worker>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Resume;