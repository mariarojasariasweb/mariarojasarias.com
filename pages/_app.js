import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import "@fontsource/roboto";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};
