// types/tailwindcss.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { ColorValue } from 'tailwindcss/types/config';
    export default function flattenColorPalette(colors: any): Record<string, ColorValue>;
  }
  