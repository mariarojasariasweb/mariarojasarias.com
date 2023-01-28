import React from "react";
import PropTypes from "prop-types";
import {
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";
import { useRouter } from "next/router";

const MenuDesktop = ({ menuData, projectsIsOpen, handleProjects }) => {
  const router = useRouter();

  return (
    <Flex {...styles.menuContainer}>
      <Link href="/" passHref>
        <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      </Link>
      <Accordion allowToggle index={projectsIsOpen ? 0 : null}>
        <AccordionItem {...styles.accordionItem}>
          <AccordionButton
            {...styles.accordionButton}
            onClick={() => handleProjects()}
          >
            <Text {...styles.menuLink}>
              {router.locale === "en" ? "PROJECTS" : "PROYECTOS"}
            </Text>
          </AccordionButton>
          <AccordionPanel {...styles.accordionPanel}>
            {menuData.projectsList.map((project, key) => {
              if (router.query.project === project.slug) {
                return (
                  <Link href={"/projects/" + project.slug} key={key} passHref>
                    <Text {...styles.menuLink.currentPage}>
                      {project.title}
                    </Text>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {menuData.pagesList.map((page, key) => {
        if (router.query.page === page.slug) {
          return (
            <Link href={"/" + page.slug} key={key} passHref>
              <Text {...styles.menuLink.currentPage}>{page.title}</Text>
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
