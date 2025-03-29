import React from "react";
import PropTypes from "prop-types";
import HomepageVideo from "../src/components/HomepageVideo";
import Head from "next/head";
import {
  getProjectsList,
  getPagesList,
  getMetadata,
  getVideo,
} from "../src/readDataFiles";

const Index = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>{pageData.metadata.title}</title>
        <meta name="description" content={pageData.metadata.description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <HomepageVideo video={pageData.video} />
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
    video: getVideo(),
  };

  return {
    props: {
      pageData,
    },
  };
}

Index.propTypes = {
  pageData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired,
};

export default Index;
