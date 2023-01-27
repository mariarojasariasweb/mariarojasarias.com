import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";

const ProjectTiles = ({ projectsList }) => {
  return (
    <Flex {...styles.container}>
      {projectsList.map((project, key) => (
        <Link href={"/projects/" + project.slug} key={key} passHref>
          <Flex
            {...styles.tileContainer}
            {...{ backgroundImage: "url('" + project.mainImage + "/-/grayscale/-/resize/1800x/-/format/webp/')" }}
          >
            <Text {...styles.title}>{project.title}</Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

ProjectTiles.propTypes = {
  projectsList: PropTypes.array.isRequired,
};

export default ProjectTiles;
