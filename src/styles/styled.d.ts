import "styled-components";

type Theme = {
  title: string;

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
}
