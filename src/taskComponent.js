/* eslint-disable no-unused-expressions */
import './styles/checkbox.css';
import './styles/task.css';
import createTaskModal from './taskModalComponent';

export default function createTaskItem(
  taskName,
  dueDateText,
  priority,
  taskId,
  completionStatus,
  project,
) {
  const currentTask = {
    taskName,
    priority,
    dueDate: dueDateText,
  };

  // Select the parent wrapper
  const taskWrapper = document.querySelector('.task__wrapper');

  if (!taskWrapper) {
    console.error("Parent wrapper with class 'task__wrapper' not found.");
    return;
  }

  // Create the main <div> with class "task__item"
  const taskItem = document.createElement('div');
  taskItem.classList.add('task__item');
  taskItem.setAttribute('data-id', taskId);

  // Create the child <div> with class "task__item--details"
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('task__item--details');

  completionStatus && detailsDiv.classList.add('completed');

  // Create the <label> for the task
  const label = document.createElement('label');
  label.classList.add('container');
  label.textContent = taskName;

  // Create the <input> element
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'task_completion_checkbox';
  input.addEventListener('change', function (e) {
    const taskItemDiv = e.target.closest('.task__item--details');
    if (this.checked) {
      taskItemDiv.classList.add('completed');
      project.completeTask(taskId);
    } else {
      taskItemDiv.classList.remove('completed');
      project.reverseCompleteTask(taskId);
    }
  });

  // Create the <span> with class "checkmark"
  const checkmark = document.createElement('span');
  const priorityClasses = {
    high: 'priority--high',
    medium: 'priority--medium',
    low: 'priority--low',
  };

  checkmark.classList.add('checkmark');
  checkmark.classList.add(priorityClasses[priority] || priorityClasses.low);

  // Append <input> and <span> to the <label>
  label.appendChild(input);
  label.appendChild(checkmark);

  // Create the <span> for the due date
  let dueDate;
  if (dueDateText !== '') {
    dueDate = document.createElement('span');
    dueDate.textContent = dueDateText;
    dueDate.classList.add('task__due-date');
  }

  // Create the <div> for the action buttons
  const actionController = document.createElement('div');
  actionController.classList.add('task__action--controller');

  // Create the "Edit" button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  // Create the "Delete" button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  // Append the buttons to the action controller
  actionController.appendChild(editButton);
  actionController.appendChild(deleteButton);

  // Append all elements to the details div
  detailsDiv.appendChild(label);
  dueDate !== undefined && detailsDiv.appendChild(dueDate);
  detailsDiv.appendChild(actionController);

  // Append the details div to the main task item div
  taskItem.appendChild(detailsDiv);
  taskItem.addEventListener('click', (e) => {
    const targetItem = e.target.closest('.task__item');
    if (e.target.textContent === 'Delete') {
      targetItem.remove();
      project.removeTask(taskId);
    } else if (e.target.textContent === 'Edit') {
      const editModal = createTaskModal('edit', currentTask);
      targetItem.appendChild(editModal);
    }
  });

  // Append the task item to the parent wrapper
  taskWrapper.appendChild(taskItem);
}
