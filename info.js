
import { projects, list } from "./data";

const currentUrl = new URL(window.location.href);
const path = window.location.pathname;

const projectName = path.split("/").pop();
console.log(projectName);

window.addEventListener("DOMContentLoaded", () =>
  init(projects, list, projectName)
);

function init(projects, list, projectName) {
  const projectContentWrapper = document.getElementById("project-content");
  const projectHTML = prepareProjectList(projects, projectName);
  console.log("initcall");
  projectContentWrapper.insertAdjacentHTML("afterbegin", projectHTML);
}
function prepareProjectList(projects, projectName) {
    const project = projects[projectName];
    const html = createProjectHTML(project);

    return html;
}


function createProjectHTML(project) {

  const description = project.description.map(value => `<p class="text">${value}</p>`);
  const descriptionElements = description.join("");
  const processDescription = project.processDescription.map(value => `<p>${value}</p>`);
  const processDescriptionElements = processDescription.join("");
  return `
<h1>${project.header}</h1>
<section class="support">
    <div class="stack_info">
    <strong>Stack:</strong>
    ${project.stack}</div>
    ${descriptionElements}
    
    
    
</section>
<section class="screen">
  <img class="screen" src="${project.images.large}" alt="${project.name}"/>
</section>
<section class="process">
  <h2>What we have done</h2>
  ${processDescriptionElements}
</section>
      `;
        
}

console.log(path);
