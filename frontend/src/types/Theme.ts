export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContext {
  changeMode: (mode: Mode) => void;
  mode: Mode;
}

export enum Mode {
  Light = "light",
  Dark = "dark",
}

export interface Theme {
  colors: {
    background: string;
    text: string;
  };
}
