import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

/* FUNCIÓN PARA TRAER LISTADO DE PROYECTOS */

const getProjectsList = (locale) => {
  if (locale === "en") {
    const settingsFile = JSON.parse(
      fs.readFileSync(contentDirectory + "/settings.json")
    );

    const projectsListEn = [];

    settingsFile.projectsOrderEn.forEach((project) => {
      const projectInfo = JSON.parse(
        fs.readFileSync(contentDirectory + "/en/projects/" + project + ".json")
      );

      projectsListEn.push({
        title: projectInfo.title,
        slug: project,
        mainImage: projectInfo.mainImage,
      });
    });

    return projectsListEn;
  } else if (locale === "es") {
    const settingsFile = JSON.parse(
      fs.readFileSync(contentDirectory + "/settings.json")
    );

    const projectsListEs = [];

    settingsFile.projectsOrderEs.forEach((project) => {
      const projectInfo = JSON.parse(
        fs.readFileSync(contentDirectory + "/es/projects/" + project + ".json")
      );

      projectsListEs.push({
        title: projectInfo.title,
        slug: project,
        mainImage: projectInfo.mainImage,
      });
    });

    return projectsListEs;
  }
};

/* FUNCIÓN PARA TRAER PÁGINAS ESTÁTICAS */

const getPagesList = (locale) => {
  let pagesList = [];

  if (locale === "en") {
    pagesList = [
      { title: "Bio", slug: "bio" },
      { title: "Press", slug: "press" },
      { title: "Contact", slug: "contact" },
    ];
  } else if (locale === "es") {
    pagesList = [
      { title: "Bio", slug: "bio" },
      { title: "Prensa", slug: "press" },
      { title: "Contacto", slug: "contact" },
    ];
  }

  return pagesList;
};

/* FUNCIÓN PARA TRAER INFO DE UN PROYECTO */

const getProjectContent = (locale, slug) => {
  const projectInfo = JSON.parse(
    fs.readFileSync(
      contentDirectory + "/" + locale + "/projects/" + slug + ".json"
    )
  );

  return projectInfo;
};

/* FUNCIÓN PARA TRAER INFO DE UNA PÁGINA */

const getPageContent = (locale, slug) => {
  const pageInfo = JSON.parse(
    fs.readFileSync(contentDirectory + "/" + locale + "/" + slug + ".json")
  );

  return pageInfo;
};

/* FUNCIÓN PARA TRAER METADATA */

const getMetadata = (locale) => {
  const metadata = JSON.parse(
    fs.readFileSync(contentDirectory + "/settings.json")
  );

  const output =
    locale === "en"
      ? { title: metadata.titleEn, description: metadata.descriptionEn }
      : { title: metadata.titleEs, description: metadata.descriptionEs };

  return output;
};

/* FUNCIÓN PARA TRAER VIDEO */

const getVideo = () => {
  const settings = JSON.parse(
    fs.readFileSync(contentDirectory + "/settings.json")
  );

  const videoUrl = settings.homeVideoUrl;

  return videoUrl;
};

export {
  getProjectsList,
  getPagesList,
  getProjectContent,
  getPageContent,
  getMetadata,
  getVideo
};
