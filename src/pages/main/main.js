import 'src/pages/root.css';
import './main.css';

import {
    projects,
    list,
} from 'src/data';
import View from 'src/view';

View.bootstrap(() => init(projects, list));

function init(projects, list) {
    const MainView = new View('project-list');
    const projectListHTML = prepareProjectList(projects, list);
    MainView.render(projectListHTML);
}

function prepareProjectList(projects, list) {
    return list.reduce((accum, projectName) => {
        const project = projects[projectName];
        const html = createProjectHTML(project);

        return accum + html;
    }, '');
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
            <a
              class="description"
              href="${project.href}"
            >
              ${project.title}
            </a>
            <p class="location">
              <a
                href="https://${project.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${project.url}
              </a>
              &nbsp;
              ${project.address}
            </p>
          </div>
        </div>
    `;
}
