import React from "react";
import PropTypes from "prop-types";
import {
  getProjectsList,
  getPagesList,
  getPageContent,
} from "../src/readDataFiles";
import Layout from "../src/components/Layout";

const Page = ({ pageData }) => {
  return (
    <Layout
      menuData={pageData.menu}
      contentType={"page"}
      pageContent={pageData.pageContent}
    />
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
  };

  return {
    props: {
      pageData,
    },
  };
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired,
};
