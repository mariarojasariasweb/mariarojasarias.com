import React from "react";
import PropTypes from "prop-types";
import {
  getProjectsList,
  getPagesList,
  getProjectContent,
} from "../../src/readDataFiles";

const Project = ({ pageData }) => {
  console.log(pageData);

  return (
    <>
      <h1>Test</h1>
    </>
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
    projectContent: getProjectContent(context.locale, context.params.project),
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
