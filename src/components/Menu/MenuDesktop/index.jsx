import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";
import { useRouter } from "next/router";

const MenuDesktop = ({ menuData }) => {
  const router = useRouter();

  return (
    <Flex {...styles.menuContainer}>
      <Link href="/projects" passHref>
        <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      </Link>

      {router.asPath === "/projects" ? (
        <Link href={"/projects"} passHref>
          <Text {...styles.menuLink.current}>
            {router.locale === "en" ? "PROJECTS" : "PROYECTOS"}
          </Text>
        </Link>
      ) : (
        <Link href={"/projects"} passHref>
          <Text {...styles.menuLink}>
            {router.locale === "en" ? "PROJECTS" : "PROYECTOS"}
          </Text>
        </Link>
      )}
      {menuData.pagesList.map((page, key) => {
        if (router.query.page === page.slug) {
          return (
            <Link href={"/" + page.slug} key={key} passHref>
              <Text {...styles.menuLink.current}>{page.title}</Text>
            </Link>
          );
        } else {
          return (
            <Link href={"/" + page.slug} key={key} passHref>
              <Text {...styles.menuLink}>{page.title}</Text>
            </Link>
          );
        }
      })}
      {router.locale === "en" ? (
        <Link href={router.asPath} locale="es" passHref>
          <Text {...styles.menuLink}>ESPAÑOL</Text>
        </Link>
      ) : (
        <Link href={router.asPath} locale="en" passHref>
          <Text {...styles.menuLink}>ENGLISH</Text>
        </Link>
      )}
    </Flex>
  );
};

MenuDesktop.propTypes = {
  menuData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired,
};

export default MenuDesktop;
