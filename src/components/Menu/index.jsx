import React from "react";
import PropTypes from "prop-types";
import { Show } from "@chakra-ui/react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Menu = ({ menuData, projectsIsOpen, handleProjects }) => {
  return (
    <>
      <Show below="lg">
        <MenuMobile menuData={menuData} />
      </Show>
      <Show above="lg">
        <MenuDesktop
          menuData={menuData}
          projectsIsOpen={projectsIsOpen}
          handleProjects={handleProjects}
        />
      </Show>
    </>
  );
};

Menu.propTypes = {
  menuData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired,
};

export default Menu;
