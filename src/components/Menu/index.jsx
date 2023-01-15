import React from "react";
import PropTypes from "prop-types";
import { Show } from "@chakra-ui/react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Menu = ({ menuData }) => {
  return (
    <>
      <Show below="lg">
        <MenuMobile menuData={menuData} />
      </Show>
      <Show above="lg">
        <MenuDesktop menuData={menuData} />
      </Show>
    </>
  );
};

Menu.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default Menu;
