"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    let newOutput = [...output];
    newOutput.push(`guest@system:~$ ${command}`);

    if (command.trim() !== '') {
      switch (command.trim()) {
        case 'whoami':
          newOutput.push('Raymond (Lei) Chi');
          break;
        case 'ls':
          newOutput.push('about projects contact resume');
          break;
        case 'clear':
          newOutput = [];
          break;
        case 'help':
          newOutput.push(
            'Available commands:',
            'whoami - Displays the current user',
            'ls - Lists available directories',
            'cd <directory> - Changes to the specified directory',
            'clear - Clears the terminal screen',
            'curl resume - Downloads Raymond\'s resume',
            'help - Displays this help message'
          );
          break;
        default:
          if (command.startsWith('cd ')) {
            const dir = command.split(' ')[1];
            if (dir == 'about'){
              window.location.href = '/';
            } else if (['projects', 'contact', 'resume'].includes(dir)) {
              window.location.href = `/${dir}`;
              return;
            } else {
              newOutput.push(`Invalid directory: ${dir}`);
            }
          } else if (command.startsWith('curl ')) {
            const url = command.split(' ')[1];
            if (url === 'resume') {
              newOutput.push(
                'Downloading resume...',
                'Resume downloaded successfully. <a href="/Raymond Chi Resume.pdf" download class="download-link">Click here to download</a>'
              );
            } else {
              newOutput.push(`Invalid URL: ${url}`);
            }
          } else {
            newOutput.push(`Command not found: ${command}`);
          }
      }
    }

    setOutput(newOutput);
    setHistory([...history, command]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCommand(input.trim());
    setInput('');
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>
      <div ref={terminalBodyRef} className="terminal-body">
        <div className="terminal-content">
          <div className="mb-2">Type &quot;help&quot; for help</div>
          {output.map((line, index) => (
            <div key={index} className="mb-1" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div className="terminal-input-line">
            <span className="terminal-prompt">guest@system:~$</span>
            <form onSubmit={handleSubmit} className="terminal-form">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="terminal-input"
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
