import React from "react";
import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";

const HomepageVideo = ({ video }) => {
  return (
    <AspectRatio {...styles.videoContainer}>
      <>
        <Box as="video" src={video} autoPlay muted loop></Box>
        <Flex {...styles.textContainer}>
          <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
          <Flex {...styles.languageContainer}>
            <Link href="/projects" locale="es" passHref>
              <Text {...styles.menuLink}>ESPAÑOL</Text>
            </Link>
            <Link href="/projects" local="en" passHref>
              <Text {...styles.menuLink}>ENGLISH</Text>
            </Link>
          </Flex>
        </Flex>
      </>
    </AspectRatio>
  );
};

export default HomepageVideo;
