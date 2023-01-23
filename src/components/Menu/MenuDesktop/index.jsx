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

const MenuDesktop = ({ menuData }) => {
  const router = useRouter();

  return (
    <Flex {...styles.menuContainer}>
      <Link href="/" passHref>
        <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      </Link>
      <Accordion allowToggle>
        <AccordionItem {...styles.accordionItem}>
          <AccordionButton {...styles.accordionButton}>
            <Text>PROJECTS</Text>
          </AccordionButton>
          <AccordionPanel {...styles.accordionPanel}>
            {menuData.projectsList.map((project, key) => (
              <Link href={"/projects/" + project.slug} key={key} passHref>
                <Text {...styles.menuLink}>{project.title}</Text>
              </Link>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {menuData.pagesList.map((page, key) => (
        <Link href={"/" + page.slug} key={key} passHref>
          <Text {...styles.menuLink}>{page.title}</Text>
        </Link>
      ))}
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
};

export default MenuDesktop;
