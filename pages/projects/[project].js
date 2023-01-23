import React from "react";
import PropTypes from "prop-types";
import {
  getProjectsList,
  getPagesList,
  getProjectContent,
} from "../../src/readDataFiles";
import Layout from "../../src/components/Layout";

const Project = ({ pageData }) => {

  console.log(pageData.menu.projectsList);

  return (
    <Layout menuData={pageData.menu} contentType={"project"} pageContent={pageData.pageContent} />
  );
};

export default Project;

export async function getStaticPaths() {
  /* TRAER LISTADO DE ARCHIVOS ES Y EN PARA GENERAR PATHS */

  let listOfPaths = [];

  let enFiles = getProjectsList("en");
  let esFiles = getProjectsList("es");

  enFiles.forEach((file) =>
    listOfPaths.push({ params: { project: file.slug }, locale: "en" })
  );

  esFiles.forEach((file) =>
    listOfPaths.push({ params: { project: file.slug }, locale: "es" })
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
    pageContent: getProjectContent(context.locale, context.params.project),
  };

  return {
    props: {
      pageData,
    },
  };
}

Project.propTypes = {
  pageData: PropTypes.object.isRequired,
};
