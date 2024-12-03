import { format } from 'date-fns';
import render from './renderer';
import Project from './project';
import Task from './task';

const projectList = [];
let projectCount = projectList.length;
let currentProject;
let taskCount = 0;

// on each addition of project, the project list will be re-rendered
export function createProject(name) {
  const newProject = new Project(name, projectCount++);
  projectList.push(newProject);
  currentProject = newProject; // sets current project to newly created project
  // todo: to consider making just the HTML component for the new one
  // todo: then append it on top of existing HTML
  render(projectList);
}

export function createTask(title, dueDate, priority) {
  const newTask = new Task(
    title,
    dueDate,
    priority,
    taskCount++,
    currentProject,
  );
  currentProject.appendTask(newTask);
  render(currentProject.taskList);
}

export function editTask(title, dueDate, priority, taskId) {
  const targetTask = currentProject.findTask(taskId);
  targetTask.edit(title, dueDate, priority);
  render(currentProject.taskList);
}

function findProject(id) {
  return projectList.filter((project) => project.id === id)[0];
}

function selectProject(id) {
  // identify the selected project based on ID
  const project = findProject(id);
  currentProject = project;
}

// todo: to be placed into eventlistener for sort button
function sortTask() {
  currentProject.taskList.sort(Task.comparePriority);
  render(currentProject.taskList);
}

// create default project
createProject('Project Zero');

// create and display some task for default project
createTask('Meditate', format(new Date(2024, 11, 28), 'dd/MM/yyyy'), 'low');

// todo: to be brought over to domController
// sort task on sort button event listener
sortTask();

// todo: to be brought over to domController
// select project based on project (data-id) clicked
selectProject(0);
