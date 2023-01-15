import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: "Robot, sans-serif",
    body: "Robot, sans-serif",
  },
  breakpoints: {
    sm: "320px",
    lg: "990px",
  },
});

export default theme;
