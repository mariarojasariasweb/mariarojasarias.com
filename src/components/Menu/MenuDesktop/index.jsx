import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading } from "@chakra-ui/react";

const MenuDesktop = ({ menuData }) => {
  return (
    <Flex>
      {menuData.projectsList.map((project, key) => (
        <Heading key={key}>{project.title}</Heading>
      ))}
    </Flex>
  );
};

MenuDesktop.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default MenuDesktop;
