import React from "react";
import PropTypes from "prop-types";
import { Flex, Image } from "@chakra-ui/react";
import styles from "./styles";

const ImageBlock = ({ blockContent }) => {
  return (
    <Flex {...styles.container}>
      <Image src={blockContent.image} />
    </Flex>
  );
};

ImageBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default ImageBlock;
