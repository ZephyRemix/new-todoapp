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
    // todo: to be replaced with actual HTML components
    console.log(`rendering project: ${project.name}`);
}

function renderTask(task) {
    // todo: to be replaced with actual HTML components
    console.log(`rendering task: ${task.title}`);
}