import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import {
  getProjectsList,
  getPagesList,
  getMetadata,
} from "../src/readDataFiles";
import Head from "next/head";

const Projects = ({ pageData, projectsIsOpen, handleProjects }) => {
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
        projectsIsOpen={projectsIsOpen}
        handleProjects={handleProjects}
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

Projects.propTypes = {
  pageData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired
};

export default Projects;
