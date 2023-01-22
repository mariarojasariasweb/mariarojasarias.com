import React from "react";
import PropTypes from "prop-types";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Flex,
} from "@chakra-ui/react";
import styles from "./styles";

const MenuMobile = ({ menuData }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem {...styles.accordionItem}>
        <Flex {...styles.menuHeader}>
          <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
          <AccordionButton {...styles.accordionButton}>—</AccordionButton>
        </Flex>
        <AccordionPanel {...styles.accordionPanel}>
          <Flex {...styles.linksPanel}>
            <Text {...styles.menuLink}>Projects</Text>
            {menuData.pagesList.map((page, key) => (
              <Text key={key} {...styles.menuLink}>
                {page.title}
              </Text>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

MenuMobile.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default MenuMobile;
