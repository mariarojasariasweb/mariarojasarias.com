import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";
import { useRouter } from "next/router";

const MenuDesktopProject = ({ menuData }) => {
  const router = useRouter();

  return (
    <Flex {...styles.menuContainer}>
      <Link href="/" passHref>
        <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      </Link>
      {menuData.projectsList.map((project, key) => {
        if (router.query.project === project.slug) {
          return (
            <Link href={"/projects/" + project.slug} key={key} passHref>
              <Text {...styles.menuLink.current}>{project.title}</Text>
            </Link>
          );
        } else {
          return (
            <Link href={"/projects/" + project.slug} key={key} passHref>
              <Text {...styles.menuLink}>{project.title}</Text>
            </Link>
          );
        }
      })}
    </Flex>
  );
};

MenuDesktopProject.propTypes = {
  menuData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired,
};

export default MenuDesktopProject;
