import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import {
  getProjectsList,
  getPagesList,
  getMetadata,
} from "../src/readDataFiles";
import Head from "next/head";

const Index = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>{pageData.metadata.title}</title>
        <meta name="description" content={pageData.metadata.description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Layout
        menuData={pageData.menu}
        contentType={"homepage"}
        pageContent={pageData.pageContent}
      />
    </>
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
    metadata: getMetadata(context.locale),
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
