export const color = {
  background: "#151515",
  main: "#fff",
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#757575",
  gray4: "#A9A9A9",

  c1: "#f0e0c4",
  c1Dark: "#e4c199",

  c2: "#6b6a5f",
  c2Dark: "#2f3029",

  c3: "#b7c7b0",
  c3Dark: "#90a68f",

  c4: "#b73a3a",
  c4Dark: "#9c2d2b",

  c5: "#c7d6c7",
  c5Dark: "#90a68f",

  c6: "#AD9873",
  c7: "#5A654D",
  c8: "#9D4431",

  cookieBackground: "#f5eed7",
  cookie: "#cd803d",

  countdownBackground: "#383931",
};

export const fontSize = {
  xxs: "11rem",
  xs: "14rem",
  sm: "16rem",
  md: "18rem",
  lg: "24rem",
  xl: "32rem",
};

export const breakpoints = {
  mobile: 320,
  mobileMedium: 400,
  mobileLarge: 540,
  tablet: 768,
  laptop: 1200,
  desktop: 1440,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export const boxShadow = "box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);";
export const boxShadowSmall = "box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.1);";
