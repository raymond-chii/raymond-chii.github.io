import React from 'react';
import Link from 'next/link';

const Resume = () => {
  return (
    <div className="min-h-screen p-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Raymond Chi's Resume</h1>
            <p className="text-lg text-gray-600">You can view or download my resume using the link below:</p>
        </div>
        <a href="/Raymond Chi resume.pdf" target="_blank" className="resume-link">Download Resume (PDF)</a>
        <iframe src="/Raymond Chi resume.pdf" className="resume-iframe" />
    </div>
  );
};

export default Resume;



