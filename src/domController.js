/* eslint-disable no-unused-expressions */
import createTaskModal from './taskModalComponent';
import createProjectModal from './projectModalComponent';
import { projectList } from './appController';
import { renderTask, empty } from './renderer';

// cache DOM
const addTaskBtn = document.querySelector('.addTask');
const taskContainer = document.querySelector('.task__container');
const completedInboxBtn = document.querySelector('.completed__tasks');
const generalInboxBtn = document.querySelector('.inbox');
const addProjectBtn = document.querySelector('.button--add');
const projectWrapper = document.querySelector('.project__wrapper');

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

addProjectBtn.addEventListener('click', () => {
  const addProjectModal = createProjectModal();
  projectWrapper.appendChild(addProjectModal);
});
