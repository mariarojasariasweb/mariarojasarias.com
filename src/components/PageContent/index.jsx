import React from "react";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";

const PageContent = ({ pageContent }) => {
  return <Text marginTop="30px">{pageContent.title}</Text>;
};

PageContent.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default PageContent;
