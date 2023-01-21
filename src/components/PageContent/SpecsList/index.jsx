import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Text, Flex } from "@chakra-ui/react";

const SpecsList = ({ specs }) => {
  return (
    <Flex {...styles.container}>
      {specs.map((spec, key) => (
        <Text key={key} {...styles.spec}>
          {spec.spec}
        </Text>
      ))}
    </Flex>
  );
};

SpecsList.propTypes = {
  specs: PropTypes.array.isRequired,
};

export default SpecsList;
