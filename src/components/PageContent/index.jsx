import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import SpecsList from "./SpecsList";
import styles from "./styles";
import ImageBlock from "./Blocks/ImageBlock";
import TextBlock from "./Blocks/TextBlock";
import VimeoBlock from "./Blocks/VimeoBlock";
import SocialMediaBlock from "./Blocks/SocialMediaBlock";
import ProjectTiles from "./ProjectTiles";

const PageContent = ({ pageContent, contentType }) => {
  const blocks = {
    imageBlock: ImageBlock,
    textBlock: TextBlock,
    vimeoBlock: VimeoBlock,
    socialMediaBlock: SocialMediaBlock,
  };

  return (
    <Flex {...styles.container}>
      {contentType === "project" ? (
        <>
          <Title title={pageContent.title} />
          <SpecsList specs={pageContent.specs} />
          {pageContent.projectContent.map((block, key) => {
            const Component = blocks[block.type];
            return <Component blockContent={block} key={key} />;
          })}
        </>
      ) : contentType === "page" ? (
        <>
          <Title title={pageContent.title} />
          {pageContent.pageContent.map((block, key) => {
            const Component = blocks[block.type];
            return <Component blockContent={block} key={key} />;
          })}
        </>
      ) : (
        <ProjectTiles projectsList={pageContent.projectsList} />
      )}
    </Flex>
  );
};

PageContent.propTypes = {
  pageContent: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired,
};

export default PageContent;
