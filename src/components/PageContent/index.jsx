import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import SpecsList from "./SpecsList";
import styles from "./styles";
import ImageBlock from "./Blocks/ImageBlock";
import TextBlock from "./Blocks/TextBlock";
import VimeoBlock from "./Blocks/VimeoBlock";
import SocialMediaBlock from './Blocks/SocialMediaBlock';

const PageContent = ({ pageContent, contentType }) => {

  const blocks = {
    imageBlock: ImageBlock,
    textBlock: TextBlock,
    vimeoBlock: VimeoBlock,
    socialMediaBlock: SocialMediaBlock
  };

  return (
    <Flex {...styles.container}>
      <Title title={pageContent.title} />
      {contentType === "project" && <SpecsList specs={pageContent.specs} />}
      {contentType === "project" ? pageContent.projectContent.map((block, key) => {
        const Component = blocks[block.type];
        return <Component blockContent={block} key={key} />;
      }) : pageContent.pageContent.map((block, key) => {
        const Component = blocks[block.type];
        return <Component blockContent={block} key={key} />;
      })}
    </Flex>
  );
};

PageContent.propTypes = {
  pageContent: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired
};

export default PageContent;
