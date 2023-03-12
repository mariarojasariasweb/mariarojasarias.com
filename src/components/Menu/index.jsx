import React from "react";
import PropTypes from "prop-types";
import { Show } from "@chakra-ui/react";
import MenuDesktop from "./MenuDesktop";
import MenuDesktopProject from "./MenuDesktopProject";
import MenuMobile from "./MenuMobile";
import { useRouter } from "next/router";

const Menu = ({ menuData, projectsIsOpen, handleProjects }) => {
  const router = useRouter();

  return (
    <>
      <Show below="lg">
        <MenuMobile menuData={menuData} />
      </Show>
      <Show above="lg">
        {router.asPath.includes("/projects/") ? (
          <MenuDesktopProject
            menuData={menuData}
            projectsIsOpen={projectsIsOpen}
            handleProjects={handleProjects}
          />
        ) : (
          <MenuDesktop
            menuData={menuData}
            projectsIsOpen={projectsIsOpen}
            handleProjects={handleProjects}
          />
        )}
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
