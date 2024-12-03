import { createProject } from './appController.js';

// cache DOM
const createProjectBtn = document.querySelector("button[type=submit]");
const createTaskBtn = document.querySelector(".task");

// register events
createProjectBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let projectNameInput = document.querySelector("input[type=text]");
    createProject(projectNameInput.value);
});

createTaskBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // todo: create task functionality on current project
});
