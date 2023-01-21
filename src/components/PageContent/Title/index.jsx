import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";
import styles from "./styles";

const Title = ({ title }) => {
  return <Heading {...styles.heading}>{title}</Heading>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
