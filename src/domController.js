import { createProject } from './appController.js';

// cache DOM
const createProjectBtn = document.querySelector("button[type=submit]");

// register events
createProjectBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let projectNameInput = document.querySelector("input[type=text]");
    createProject(projectNameInput.value);
});
