export const render = (item) => {
    // generate projectName, projectId (data-id)
    const itemConstructor = item.constructor.name;

    if (itemConstructor === "Project") {
        renderProject(item);
    } else if (itemConstructor === "Task") {
        renderTask(item);
    }
};

function renderProject(project) {
    console.log(`rendering ${project.name}`);
}

function renderTask(task) {
    console.log(`rendering ${task.title}`);
}