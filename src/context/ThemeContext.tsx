import React, { createContext } from "react";
import {
  DefaultTheme,
  ThemeName,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import useTheme from "../hooks/useTheme";

type ThemeContextType = {
  themeName: ThemeName;
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
