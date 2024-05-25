declare module 'react-terminal-component' {
    import * as React from 'react';
  
    export interface ReactTerminalProps {
      // Define any props you need here
      // This is just an example
      theme?: object;
      commands?: object;
      welcomeMessage?: string;
      prompt?: string;
    }
  
    export class ReactTerminal extends React.Component<ReactTerminalProps, any> {}
  }