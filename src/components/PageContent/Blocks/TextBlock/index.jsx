import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import styles from "./styles";
import { marked } from "marked";

const TextBlock = ({ blockContent }) => {
  return (
    <Box
      {...styles.text}
      dangerouslySetInnerHTML={{ __html: marked.parse(blockContent.text) }}
    />
  );
};

TextBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default TextBlock;
