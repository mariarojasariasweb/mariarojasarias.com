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
import styles from "./styles";

const MenuDesktop = ({ menuData }) => {
  return (
    <Flex {...styles.menuContainer}>
      <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Text>Projects</Text>
          </AccordionButton>
          <AccordionPanel>
            {menuData.projectsList.map((project, key) => (
              <Text key={key}>{project.title}</Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {menuData.pagesList.map((page, key) => (
        <Text key={key} {...styles.menuLink}>
          {page.title}
        </Text>
      ))}
    </Flex>
  );
};

MenuDesktop.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default MenuDesktop;
