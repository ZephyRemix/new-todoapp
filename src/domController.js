import { createProject } from './appController';
import createTaskModal from './taskModalComponent';

// cache DOM
const addTaskBtn = document.querySelector('.addTask');
const taskContainer = document.querySelector('.task__container');
// const createProjectBtn = document.querySelector("button[type=submit]");
// const createTaskBtn = document.querySelector(".task");

// register events
addTaskBtn.addEventListener('click', () => {
  const addTaskModal = createTaskModal('add');
  taskContainer.appendChild(addTaskModal);
});

// createProjectBtn.addEventListener("click", function(e) {
//     e.preventDefault();

//     let projectNameInput = document.querySelector("input[type=text]");
//     createProject(projectNameInput.value);
// });
