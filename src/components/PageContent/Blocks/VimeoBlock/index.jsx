import React from "react";
import PropTypes from "prop-types";
import Vimeo from "@u-wave/react-vimeo";
import { Box } from "@chakra-ui/react";

const VimeoBlock = ({ blockContent }) => {
  return (
    <Box>
      <Vimeo video={blockContent.id} responsive={true} />
    </Box>
  );
};

VimeoBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default VimeoBlock;
