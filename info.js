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
  // get element by type 
  // const referenceToHeader = document.getElementsByTagName("header");
  // const projectListHTML = prepareProjectList(projects, list);
  const projectHTML = prepareProjectList(projects, projectName);
  console.log("initcall");
  projectContentWrapper.insertAdjacentHTML("afterbegin", projectHTML);
  // referenceToHeader.parentNode.insertBefore(projectHTML, referenceNode.nextSibling);
}
function prepareProjectList(projects, projectName) {
    const project = projects[projectName];
    const html = createProjectHTML(project);

    return html;
}
// function prepareProjectList(projects, projectName) {
//   return list.reduce((accum, projectName) => {
//     const project = projects[projectName];
//     const html = createProjectHTML(project);

//     return html;
//   }, "");
// }
function createProjectHTML(project) {
  return `
<h1>${project.header}</h1>
<section class="support">
    <div class="stack_info">
    <strong>${project.stackTitle}</strong>
    ${project.stack}</div>

    <p class="text">${project.description[0]}</p>

    <p class="text">${project.description[1]}</p>
</section>
<section class="screen">
  <img class="screen" src="${project.images.large}" alt="${project.name}"/>
</section>
<section class="process">
  <h2>${project.processHeader}</h2>
  <p>${project.processDescription[0]}</p>
  <p>${project.processDescription[1]}</p>
</section>
  
      `;
        
}
// path = "/info/caveat"
console.log(path);
// extract project name
// "/info/caveat" --> "caveat"
// projectInfo = data[projectName];
// projectInfo = data[projectName]
// create dom nodes


   // <div class="case-study">
          //   <a
          //     href="${project.href}"
          //     class="case-study-thumbnail"
          //     id="${project.color}"
          //   >
          //     <img
          //       class="case-study-logo"
          //       src="${project.logo}"
          //       alt="${project.name} Logo"
          //     />
          //     <img 
          //       src="${project.images.large}"
          //       alt="${project.name}"
          //     />
          //   </a>
          //   <div>
          //     <p class="description">
          //       ${project.title}
          //     </p>
          //     <p class="location"><a href="#">${project.url}</a> ${project.address}</p>
          //   </div>
          // </div>
