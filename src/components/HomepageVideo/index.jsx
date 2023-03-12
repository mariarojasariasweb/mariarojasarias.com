import React from "react";
import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";

const HomepageVideo = () => {
  return (
    <AspectRatio {...styles.videoContainer}>
      <>
        <Box
          as="video"
          src={
            "https://res.cloudinary.com/dy3pzwx7m/video/upload/v1678648125/maria-rojas-arias_doa3f7.mp4"
          }
          autoPlay
          muted
          loop
        ></Box>
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
