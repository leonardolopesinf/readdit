import "styled-components";

type ThemeName = "dark" | "light";

type Theme = {
  name: ThemeName;

  colors: {
    primary: string;
    secondary: string;
    complementary: string;
    gray: string;

    background: string;

    text: string;
    highlightText: string;
    purpleText: string;

    skeletonColor?: string;
    skeletonHightlight?: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  export type ThemeName = ThemeName;
}
