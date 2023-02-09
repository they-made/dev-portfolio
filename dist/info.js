// import data object {"caveat": {}, "veneer": {}}
import { projects, list } from "./data";

const currentUrl = new URL(window.location.href);
const path = window.location.pathname;

// extract text after last slash from path
const projectName = path.split("/").pop();
console.log(projectName);

window.addEventListener("DOMContentLoaded", () =>
  init(projects, list, projectName)
);

function init(projects, list, projectName) {
  const projectContentWrapper = document.getElementById("project-content");
  // const projectListHTML = prepareProjectList(projects, list);
  const projectHTML = prepareProjectList(projects, list);
  console.log("initcall");
  projectContentWrapper.insertAdjacentHTML("afterbegin", projectHTML);
}
function prepareProjectList(projects, list) {
  return list.reduce((accum, projectName) => {
    const project = projects[projectName];
    const html = createProjectHTML(project);

    return accum + html;
  }, "");
}
function createProjectHTML(project) {
  return `
          <div class="case-study">
            <a
              href="${project.href}"
              class="case-study-thumbnail"
              id="${project.color}"
            >
              <img
                class="case-study-logo"
                src="${project.logo}"
                alt="${project.name} Logo"
              />
              <img 
                src="${project.images.large}"
                alt="${project.name}"
              />
            </a>
            <div>
              <p class="description">
                ${project.title}
              </p>
              <p class="location"><a href="#">${project.url}</a> ${project.address}</p>
            </div>
          </div>
      `;
}
// path = "/info/caveat"
console.log(path);
// extract project name
// "/info/caveat" --> "caveat"
projectInfo = data[projectName];
// projectInfo = data[projectName]
// create dom nodes
