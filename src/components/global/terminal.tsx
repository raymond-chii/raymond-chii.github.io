"use client";

import React from 'react';
import { ReactTerminal } from 'react-terminal-component';
import { EmulatorState, OutputFactory, CommandMapping, DefaultCommandMapping } from 'javascript-terminal';

// Define custom commands with option definitions and correct types
const customCommands: { [key: string]: { function: (state: any, opts: any) => { output: any }, optDef: object } } = {
  whoami: {
    function: () => {
      return {
        output: OutputFactory.makeTextOutput('Raymond (Lei) Chi')
      };
    },
    optDef: {}
  },
  ls: {
    function: () => {
      return {
        output: OutputFactory.makeTextOutput('about projects contact resume')
      };
    },
    optDef: {}
  },
  cd: {
    function: (state, opts) => {
      console.log("cd command called with opts:", opts);
      const directory = opts[0];
      console.log("Directory:", directory);
      if (['about', 'projects', 'contact', 'resume'].includes(directory)) {
        window.location.href = `/${directory}`;
        return { output: OutputFactory.makeTextOutput(`Navigating to ${directory}...`) };
      } else {
        return { output: OutputFactory.makeTextOutput(`Invalid directory: ${directory}`) };
      }
    },
    optDef: {
      0: {
        description: 'Directory to navigate to',
        type: 'string',
        required: true,
      }
    }
  }
};

// Create an initial state with the custom commands
const emulatorState = EmulatorState.create({
  commandMapping: CommandMapping.create({
    ...DefaultCommandMapping,
    ...customCommands
  })
});

const Terminal = () => {
  return (
    <div className="terminal-container">
      <ReactTerminal
        emulatorState={emulatorState}
        theme={{
          background: '#2D2D2D',
          promptSymbolColor: '#D4D4D4',
          commandColor: '#D4D4D4',
          outputColor: '#D4D4D4',
          errorColor: '#F2777A',
          fontFamily: 'monospace',
          fontSize: '14px',
          spacing: '1%',
          letterSpacing: '0.1em'
        }}
        welcomeMessage="Welcome to the terminal! Type 'cd <directory>' to navigate."
        prompt="guest@system:~$"
      />
    </div>
  );
};

export default Terminal;
