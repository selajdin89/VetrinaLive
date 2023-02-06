import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    blue: {
      primary: "#21B8F9",
    },
    text: {
      primary: "#103B66",
    },
    // Add new color
    primary: {
      black: "#103B66",
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
  shadows: {
    100: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
  },
  fontSizes: {
    primary: "17px",
  },
});
export default theme;
