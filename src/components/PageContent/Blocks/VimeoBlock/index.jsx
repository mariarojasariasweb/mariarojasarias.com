import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/react";

const VimeoBlock = ({ blockContent }) => {
  return (
    <Flex>
      <Text>{blockContent.id}</Text>
    </Flex>
  );
};

VimeoBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default VimeoBlock;
