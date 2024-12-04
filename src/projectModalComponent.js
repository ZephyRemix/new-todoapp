import './styles/task_modal.css';
import { createProject } from './appController';

export default function createProjectModal() {
  // Create the modal wrapper
  const modal = document.createElement('div');
  modal.classList.add('task__modal');

  // Create the form element
  const form = document.createElement('form');

  // Project name input
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'project');
  nameLabel.classList.add('visually-hidden');
  nameLabel.textContent = 'Project name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameInput.placeholder = 'Project Hercules';

  // Append project name input to the form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  // Append form to the modal
  modal.appendChild(form);

  // Create the modal controller
  const controllerDiv = document.createElement('div');
  controllerDiv.classList.add('task__modal--controller');

  // Cancel button
  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancelProjectButton';
  cancelButton.textContent = 'Cancel';

  // Add/Edit button (depending on mode)
  const actionButton = document.createElement('button');
  actionButton.id = 'addProjectButton';
  actionButton.textContent = 'Add Project';

  // Append buttons to the controller div
  controllerDiv.appendChild(cancelButton);
  controllerDiv.appendChild(actionButton);

  // Add event listener to handle actions
  controllerDiv.addEventListener('click', (e) => {
    const projectModalDiv = e.target.closest('.task__modal');

    if (e.target.id === 'cancelProjectButton') {
      projectModalDiv.remove();
    } else if (e.target.id === 'addProjectButton') {
      const nameVal = form.querySelector('#name').value;
      createProject(nameVal);

      // Clear input field, then remove modal from view
      form.reset();
      projectModalDiv.remove();
    }
  });

  // Append controller div to the modal
  modal.appendChild(controllerDiv);

  return modal;
}
