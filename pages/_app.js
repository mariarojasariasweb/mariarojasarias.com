import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import "@fontsource/roboto";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);

  const handleProjects = () => {
    if (projectsIsOpen === false) {
      setProjectsIsOpen(true);
    } else if (projectsIsOpen === true) {
      setProjectsIsOpen(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Component
        {...pageProps}
        projectsIsOpen={projectsIsOpen}
        handleProjects={handleProjects}
      />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};
