/* eslint-disable no-unused-expressions */
import createTaskModal from './taskModalComponent';
import { projectList } from './appController';
import { renderTask, empty } from './renderer';

// cache DOM
const addTaskBtn = document.querySelector('.addTask');
const taskContainer = document.querySelector('.task__container');
const completedInboxBtn = document.querySelector('.completed__tasks');
const generalInboxBtn = document.querySelector('.inbox');
// const createProjectBtn = document.querySelector("button[type=submit]");
// const createTaskBtn = document.querySelector(".task");

// register events
addTaskBtn.addEventListener('click', () => {
  const addTaskModal = createTaskModal('add');
  taskContainer.appendChild(addTaskModal);
});

completedInboxBtn.addEventListener('click', () => {
  empty(document.querySelector('.task__wrapper'));
  projectList.forEach((project) => {
    project.taskList.forEach((task) => {
      task.completed && renderTask(task);
    });
  });
});

generalInboxBtn.addEventListener('click', () => {
  empty(document.querySelector('.task__wrapper'));
  projectList.forEach((project) => {
    project.taskList.forEach((task) => {
      !task.completed && renderTask(task);
    });
  });
});
// createProjectBtn.addEventListener("click", function(e) {
//     e.preventDefault();

//     let projectNameInput = document.querySelector("input[type=text]");
//     createProject(projectNameInput.value);
// });
