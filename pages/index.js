import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import { getProjectsList, getPagesList } from "../src/readDataFiles";

const Index = ({ pageData }) => {
  return (
    <Layout
      menuData={pageData.menu}
      contentType={"homepage"}
      pageContent={pageData.pageContent}
    />
  );
};

export async function getStaticProps(context) {
  const pageData = {
    menu: {
      projectsList: getProjectsList(context.locale),
      pagesList: getPagesList(context.locale),
    },
    pageContent: {
      projectsList: getProjectsList(context.locale),
    },
  };

  return {
    props: {
      pageData,
    },
  };
}

Index.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Index;
