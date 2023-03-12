import React from "react";
import PropTypes from "prop-types";
import {
  getProjectsList,
  getPagesList,
  getPageContent,
  getMetadata,
} from "../src/readDataFiles";
import Layout from "../src/components/Layout";
import Head from "next/head";

const Page = ({ pageData, projectsIsOpen, handleProjects }) => {
  return (
    <>
      <Head>
        <title>
          {pageData.pageContent.title} - {pageData.metadata.title}
        </title>
        <meta name="description" content={pageData.metadata.description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Layout
        menuData={pageData.menu}
        contentType={"page"}
        pageContent={pageData.pageContent}
        projectsIsOpen={projectsIsOpen}
        handleProjects={handleProjects}
      />
    </>
  );
};

export default Page;

export async function getStaticPaths() {
  /* TRAER LISTADO DE ARCHIVOS ES Y EN PARA GENERAR PATHS */

  let listOfPaths = [];

  let enFiles = getPagesList("en");
  let esFiles = getPagesList("es");

  enFiles.forEach((file) =>
    listOfPaths.push({ params: { page: file.slug }, locale: "en" })
  );

  esFiles.forEach((file) =>
    listOfPaths.push({ params: { page: file.slug }, locale: "es" })
  );

  return {
    paths: listOfPaths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const pageData = {
    menu: {
      projectsList: getProjectsList(context.locale),
      pagesList: getPagesList(context.locale),
    },
    pageContent: getPageContent(context.locale, context.params.page),
    metadata: getMetadata(context.locale),
  };

  return {
    props: {
      pageData,
    },
  };
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired,
  projectsIsOpen: PropTypes.bool.isRequired,
  handleProjects: PropTypes.func.isRequired,
};
