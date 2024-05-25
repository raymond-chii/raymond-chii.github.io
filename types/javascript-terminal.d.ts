declare module 'javascript-terminal' {
  import * as React from 'react';

  export interface Output {
    type: string;
    content: string;
  }

  export namespace OutputFactory {
    function makeTextOutput(content: string): Output;
  }

  export class EmulatorState {
    static create(config: { commandMapping: CommandMapping }): EmulatorState;
  }

  export class CommandMapping {
    static create(commands: { [key: string]: { function: (state: any, opts: any) => { output: Output }, optDef: object } }): CommandMapping;
  }

  export const DefaultCommandMapping: CommandMapping;
}

declare module 'react-terminal-component' {
  import * as React from 'react';
  import { EmulatorState } from 'javascript-terminal';

  export interface ReactTerminalProps {
    emulatorState?: EmulatorState;
    theme?: object;
    welcomeMessage?: string;
    prompt?: string;
  }

  export class ReactTerminal extends React.Component<ReactTerminalProps, any> {}
}
