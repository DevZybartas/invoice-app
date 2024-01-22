import { createContext, useContext, useState } from "react";
import type { ThemeContext, ThemeProviderProps } from "../types/Theme";
import { lightTheme, darkTheme } from "../styles/Theme";
import { Mode } from "../types/Theme";
import { ThemeProvider } from "styled-components";

const initialValue = {
  changeMode: () => {},
  mode: Mode.Light,
};

const AppThemeContext = createContext<ThemeContext>(initialValue);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<Mode>(Mode.Light);
  const [theme, setTheme] = useState(lightTheme);

  const changeMode = (mode: Mode) => {
    setTheme(mode === Mode.Light ? lightTheme : darkTheme);
    setMode(mode);
  };
  return (
    <AppThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppThemeContext);
export default AppThemeProvider;
