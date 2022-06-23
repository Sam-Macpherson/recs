// Letter spacing guide for Roboto font taken from
// https://www.webdesignerdepot.com/2020/07/the-designers-guide-to-letter-spacing/
const letterSpacings = {
  h1: "-1.5",
  h2: "-0.5",
  h3: "0",
  h4: "0.25",
  h5: "0",
  h6: "0.15",
  subtitle1: "0.15",
  subtitle2: "0.1",
  body1: "0.5",
  body2: "0.25",
  overline: "1.5",
};

const fontWeights = {
  normal: "400",
  medium: "500",
  bold: "700",
};

const BOLD = {
  "font-weight": fontWeights.bold,
}

const sizes = {
  12: "0.75rem",
  16: "1rem",
  24: "1.5rem",
};

const LARGE = {
  "font-size": sizes[24],
}

const MEDIUM = {
  "font-size": sizes[16],
}

const SMALL = {
  "font-size": sizes[12],
}

const OVERLINE = {
  "line-height": "1",
  "text-transform": "uppercase",
  "font-weight": fontWeights.normal,
  "letter-spacing": letterSpacings.overline,
}

const FontSizes = {
  SMALL: SMALL,
  MEDIUM: MEDIUM,
  LARGE: LARGE,
}

const FontStyles = {
  OVERLINE: OVERLINE,
}

const FontWeights = {
  NORMAL: fontWeights.normal,
  MEDIUM: fontWeights.medium,
  BOLD: BOLD,
}

export { FontSizes, FontWeights, FontStyles };
