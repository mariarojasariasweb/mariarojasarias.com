import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const DesktopTopMenu = ({ menuData }) => {
  const router = useRouter();

  return (
    <Flex {...styles.topMenuContainer}>
      {router.asPath === "/projects" ? (
        <Link href={"/projects"} passHref>
          <Text {...styles.menuLink.currentPath}>
            {router.locale === "en" ? "Projects" : "Proyectos"}
          </Text>
        </Link>
      ) : (
        <Link href={"/projects"} passHref>
          <Text {...styles.menuLink}>
            {router.locale === "en" ? "Projects" : "Proyectos"}
          </Text>
        </Link>
      )}
      {menuData.pagesList.map((page, key) => {
        if (router.query.page === page.slug) {
          return (
            <Link href={"/" + page.slug} key={key} passHref>
              <Text {...styles.menuLink.currentPath}>{page.title}</Text>
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

DesktopTopMenu.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default DesktopTopMenu;
