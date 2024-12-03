import renderProjectComponent from './projectComponent.js';
import renderTaskComponent from './taskComponent.js';

let taskWrapper = document.querySelector('.task__wrapper');
let projectWrapper = document.querySelector('ul');

export const render = (itemArray) => {
  const itemConstructor = itemArray[0].constructor.name;

  if (itemConstructor === 'Project') {
    empty(projectWrapper);
    itemArray.forEach((project) => renderProject(project));
  } else {
    empty(taskWrapper);
    itemArray.forEach((task) => renderTask(task));
  }
};

function renderProject(project) {
  renderProjectComponent(project.name);
}

function renderTask(task) {
  renderTaskComponent(
    task.title,
    task.dueDate,
    task.priority,
    task.id,
    task.projectRef,
  );
}

function empty(container) {
  container.innerHTML = '';
}
