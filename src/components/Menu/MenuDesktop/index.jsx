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

const MenuDesktop = ({ menuData }) => {
  return (
    <Flex {...styles.menuContainer}>
      <Link href="/">
        <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      </Link>
      <Accordion allowToggle>
        <AccordionItem {...styles.accordionItem}>
          <AccordionButton {...styles.accordionButton}>
            <Text>PROJECTS</Text>
          </AccordionButton>
          <AccordionPanel {...styles.accordionPanel}>
            {menuData.projectsList.map((project, key) => (
              <Link href={"/projects/" + project.slug} key={key}>
                <Text {...styles.menuLink}>{project.title}</Text>
              </Link>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {menuData.pagesList.map((page, key) => (
        <Link href={"/" + page.slug} key={key}>
          <Text {...styles.menuLink}>{page.title}</Text>
        </Link>
      ))}
      <Text {...styles.menuLink}>ESPAÑOL</Text>
    </Flex>
  );
};

MenuDesktop.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default MenuDesktop;
