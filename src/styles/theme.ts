import { darken, lighten } from "polished";
import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  title: "light",

  colors: {
    primary: "#6324C6",
    secondary: "#A7B0BE",
    complementary: "#FFB800",
    gray: "#4C5667",

    background: "#ffffff",

    text: "#000000",
    highlightText: "#FFFFFF",
    purpleText: "#6324C6",

    skeletonColor: "",
    skeletonHightlight: "",
  },
};

const dark: DefaultTheme = {
  title: "dark",

  colors: {
    primary: "#6324C6",
    secondary: "#A7B0BE",
    complementary: "#FFB800",
    gray: lighten(0.2, "#4C5667"),

    background: "#18191c",

    text: darken(0.12, "#ffffff"),
    highlightText: "#FFFFFF",
    purpleText: lighten(0.15, "#6324C6"),

    skeletonColor: "#202020",
    skeletonHightlight: "#444",
  },
};

export { light, dark };
