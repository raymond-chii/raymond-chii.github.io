"use client";

import React from 'react';
import Terminal from '@/components/global/terminal';

const TerminalPage = () => {
  return (
    <div className="min-h-screen p-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Terminal</h1>
            <p className="text-lg text-gray-600">Welcome to Raymond's profile</p>
        </div>
      <Terminal />
    </div>
  );
};

export default TerminalPage;
