import { useCallback, useMemo } from "react";
import { DefaultTheme, ThemeName } from "styled-components";
import { dark, light } from "../styles/theme";
import usePersist from "./usePersist";

type Response = [
  themeName: ThemeName,
  currentTheme: DefaultTheme,
  toggleTheme: () => void
];

function useTheme(): Response {
  const [themeName, setThemeName] = usePersist("theme", "light");

  const theme = useMemo(
    () => (themeName === "light" ? light : dark),
    [themeName]
  );

  const toggleTheme = useCallback(() => {
    setThemeName((state) => (state === "light" ? "dark" : "light"));
  }, [setThemeName]);

  return [themeName, theme, toggleTheme];
}

export default useTheme;
