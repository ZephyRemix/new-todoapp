import { render } from './renderer.js';
import Project from './project.js';
import Task from './task.js';

import { format, compareAsc } from "date-fns";

let projectList = [];
let projectCount = projectList.length;  /* will be used by displayController to generate project data-id */
let currentProject;
let taskCount = 0;

// create default project 
createProject("Project Zero");

// create and display some task for default project
createTask("Meditate", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "high", taskCount++, currentProject)
createTask("Close till", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "low", taskCount++, currentProject)
createTask("Learn coding", format(new Date(2024, 11, 28), "dd/MM/yyyy"), "medium", taskCount++, currentProject)

// todo: to be brought over to domController
// sort task on sort button event listener
sortTask();

// todo: to be brought over to domController
// select project based on project (data-id) clicked
selectProject(0);


// on each addition of project, the project list will be re-rendered
export function createProject(name) {
    const newProject = new Project(name, projectCount++);
    projectList.push(newProject);
    currentProject = newProject;    // sets current project to newly created project   
    // todo: to consider making just the HTML component for the new one
    // todo: then append it on top of existing HTML 
    render(projectList);
}

function createTask(title, dueDate, priority, id, project) {
    // todo: to edit id value based on data-id attribute
    const newTask = new Task(title, dueDate, priority, id, project);
    currentProject.appendTask(newTask); 
    render(currentProject.taskList);
}

function selectProject(id) {
    // identify the selected project based on ID
    const selectedProject = findProject(id)[0];

    // currentProject = selectedProject
    currentProject = selectedProject;
    console.log(`Current selected project: ${currentProject.name}`);
}

function sortTask() {
    console.log("Sorting task by priority...");
    currentProject.taskList.sort(Task.comparePriority);
    currentProject.taskList.forEach(task => {
        console.log(task.title);
    });
}

function findProject(id) {
    return projectList.filter((project) => project.id === id);
}
