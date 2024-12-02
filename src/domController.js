import appController from './appController.js';

const domController = (function() {
    // cache DOM
    const createProjectBtn = document.querySelector("button[type=submit]");

    // register events
    createProjectBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const projectNameInput = document.querySelector("input[type=text]");
        renderProject(projectNameInput.value);
    });

    return {};
})();

export default domController;