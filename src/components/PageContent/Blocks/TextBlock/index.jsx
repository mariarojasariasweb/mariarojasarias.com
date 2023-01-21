import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/react";

const TextBlock = ({ blockContent }) => {
  return (
    <Flex>
      <Text>{blockContent.text}</Text>
    </Flex>
  );
};

TextBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default TextBlock;
