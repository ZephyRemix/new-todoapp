import { render } from './renderer.js';
import Project from './project.js';
import Task from './task.js';

import { format, compareAsc } from "date-fns";


let projectList = [];
let projectCount = projectList.length;  /* will be used by displayController to generate project data-id */
let currentProject;

// create default project 
createProject("Default Project");

// display default project on load
const defaultProj = projectList[0];
displayProject(defaultProj);

// create and display some task for default project
createTask("Meditate", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "high", currentProject.name, 0)
createTask("Close till", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "low", currentProject.name, 1)
createTask("Learn coding", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "medium", currentProject.name, 2)

displayTask();

// sort task on sort button event listener
sortTask();

// remove task on delete button event listener
removeTask(1);

createProject("new temp project");

// select project based on project (data-id) clicked
selectProject(0);


export function createProject(name) {
    console.log(`Creating project...: ${name}`);
    // todo: to edit id value based on data-id attribute
    const newProject = new Project(name, projectCount++);
    projectList.push(newProject);
    console.log(projectList);
    // set current project as newly created project
    currentProject = newProject;
    displayProject();
}

function createTask(title, dueDate, priority, projectName, id) {
    // todo: to edit id value based on data-id attribute
    const newTask = new Task(title, dueDate, priority, projectName, id);
    currentProject.appendTask(newTask); 
}

function selectProject(id) {
    // identify the selected project based on ID
    const selectedProject = findProject(id)[0];

    // currentProject = selectedProject
    currentProject = selectedProject;
    console.log(`Current selected project: ${currentProject.name}`);
}

function displayProject() {
    projectList.forEach(project => {
        render(project);
    });
};

function displayTask() {
    currentProject.taskList.forEach(task => {
        render(task);
    });
}

function sortTask() {
    console.log("Sorting task by priority...");
    currentProject.taskList.sort(Task.comparePriority);
    currentProject.taskList.forEach(task => {
        console.log(task.title);
        console.log(task.dueDate);
    });
}

function removeTask(taskId) {
    console.log("Removing task...");
    currentProject.removeTask(taskId);
    displayTask();
}

function findProject(id) {
    return projectList.filter((project) => project.id === id);
}
