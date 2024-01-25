import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    color: {
      1: "#7C5DFA",
      2: "#9277FF",
      3: "#1E2139",
      4: "#252945",
      5: "#DFE3FA",
      6: "#888EB0",
      7: "#7E88C3",
      8: "#0C0E16",
      9: "#EC5757",
      10: "#FF9797",
      11: "#F8F8FB",
      12: "#141625",
    },
  },

  space: {
    mobile: {
      22: "1.375rem",
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
