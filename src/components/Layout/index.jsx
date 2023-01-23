import React from "react";
import PropTypes from "prop-types";
import Menu from "../Menu";
import PageContent from "../PageContent";
import { Flex } from "@chakra-ui/react";
import styles from "./styles";

const Layout = ({ menuData, pageContent, contentType }) => {
  return (
    <Flex {...styles.layoutContainer}>
      <Menu menuData={menuData} />
      <PageContent pageContent={pageContent} contentType={contentType} />
    </Flex>
  );
};

Layout.propTypes = {
  menuData: PropTypes.object.isRequired,
  pageContent: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired
};

export default Layout;
