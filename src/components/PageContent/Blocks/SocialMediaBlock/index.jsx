import React from "react";
import PropTypes from "prop-types";
import { FaInstagram, FaVimeoV } from "react-icons/fa";
import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";

const SocialMediaBlocks = ({ blockContent }) => {
  const icons = {
    Instagram: FaInstagram,
    Vimeo: FaVimeoV,
  };

  return (
    <Flex {...styles.iconsContainer}>
      {blockContent.socialMediaPlatforms.map((platform, key) => (
        <Flex key={key} {...styles.socialIcon}>
          <Link href={platform.url}>
            <Icon as={icons[platform.platform]}></Icon>
          </Link>
        </Flex>
      ))}
    </Flex>
  );
};

SocialMediaBlocks.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default SocialMediaBlocks;
