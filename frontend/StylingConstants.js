

const ColorPalette = {
  BLACK: "rgba(10, 15, 20, 1)",
  DARK_GRAY: "rgba(20, 30, 40, 1)",
  GRAY: "rgba(30, 40, 50, 1)",
  LIGHT_GRAY: "rgba(30, 40, 50, 0.8)",
  LIGHTEST_GRAY: "rgba(30, 40, 50, 0.3)",
  HIGHLIGHT_GRAY: "rgba(70, 90, 110, 0.5)",
  ORANGE: "rgba(214, 90, 49, 1)",
  LIGHT_ORANGE: "rgba(214, 90, 49, 0.8)",
  LIGHTEST_ORANGE: "rgba(214, 90, 49, 0.3)",
  TRANSPARENT: "rgba(0, 0, 0, 0)",
  WHITE: "rgba(238, 238, 238, 1)",
  LIGHT_WHITE: "rgba(238, 238, 238, 0.8)",
  LIGHTEST_WHITE: "rgba(238, 238, 238, 0.3)",
};

const FontColors = {
  WHITE: { color: ColorPalette.WHITE },
  LIGHT_WHITE: { color: ColorPalette.LIGHT_WHITE },
  LIGHTEST_WHITE: { color: ColorPalette.LIGHTEST_WHITE },
  ORANGE: { color: ColorPalette.ORANGE },
  LIGHT_ORANGE: { color: ColorPalette.LIGHT_ORANGE },
  LIGHTEST_ORANGE: { color: ColorPalette.LIGHTEST_ORANGE },
};

export { ColorPalette, FontColors };
