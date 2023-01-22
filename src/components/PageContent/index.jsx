import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import SpecsList from "./SpecsList";
import styles from "./styles";
import ImageBlock from "./Blocks/ImageBlock";
import TextBlock from "./Blocks/TextBlock";
import VimeoBlock from "./Blocks/VimeoBlock";

const PageContent = ({ pageContent }) => {
  console.log(pageContent);

  const blocks = {
    imageBlock: ImageBlock,
    textBlock: TextBlock,
    vimeoBlock: VimeoBlock,
  };

  return (
    <Flex {...styles.container}>
      <Title title={pageContent.title} />
      <SpecsList specs={pageContent.specs} />
      {pageContent.projectContent.map((block, key) => {
        const Component = blocks[block.type];
        return <Component blockContent={block} key={key} />;
      })}
    </Flex>
  );
};

PageContent.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default PageContent;
