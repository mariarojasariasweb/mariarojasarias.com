import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
