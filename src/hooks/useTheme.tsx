import { useCallback, useMemo } from "react";
import { DefaultTheme } from "styled-components";
import { dark, light } from "../styles/theme";
import usePersist from "./usePersist";

type Response = {
  currentTheme: DefaultTheme;
  toggleTheme: () => void;
};

function useTheme(): Response {
  const [theme, setTheme] = usePersist("theme", "light");

  const currentTheme = useMemo(
    () => (theme === "light" ? light : dark),
    [theme]
  );

  const toggleTheme = useCallback(() => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  }, [setTheme]);

  return { currentTheme, toggleTheme };
}

export default useTheme;
