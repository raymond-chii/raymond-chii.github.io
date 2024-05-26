"use client";

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { FaDownload } from 'react-icons/fa';
import { TracingBeam } from "@/components/ui/tracing-beam";

const Resume = () => {
  const toolbarPluginInstance = toolbarPlugin();

  return (
    <div className="min-h-screen p-4">
      <TracingBeam>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Raymond Chi's Resume</h1>
          <p className="text-lg text-gray-600">You can view or download my resume using the link below:</p>
        </div>
        <a 
          href="/Raymond Chi resume.pdf" 
          target="_blank" 
          className="resume-link flex items-center justify-center p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300 text-white"
        >
          <FaDownload className="mr-2" /> Download Resume (PDF)
        </a>
        <div className="resume-viewer mt-8">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
            <div className="pdf-container bg-gray-100 p-4 rounded-lg">
              <toolbarPluginInstance.Toolbar />
              <Viewer fileUrl="/Raymond Chi resume.pdf" plugins={[toolbarPluginInstance]} />
            </div>
          </Worker>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Resume;
