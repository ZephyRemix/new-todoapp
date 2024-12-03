import renderProjectComponent from './projectComponent';
import renderTaskComponent from './taskComponent';

const taskWrapper = document.querySelector('.task__wrapper');
const projectWrapper = document.querySelector('ul');

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

export default function render(itemArray) {
  const itemConstructor = itemArray[0].constructor.name;

  if (itemConstructor === 'Project') {
    empty(projectWrapper);
    itemArray.forEach((project) => renderProject(project));
  } else {
    empty(taskWrapper);
    itemArray.forEach((task) => renderTask(task));
  }
}
