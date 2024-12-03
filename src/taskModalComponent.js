// todo: import modal css components here
export default function createTaskModal(mode) {
    // Create the modal wrapper
    const modal = document.createElement("div");
    modal.classList.add("task__modal");
  
    // Create the form element
    const form = document.createElement("form");
  
    // Task name input
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "task");
    nameLabel.classList.add("visually-hidden");
    nameLabel.textContent = "Task name";
  
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.placeholder = "Meditation";
  
    // Append task name input to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
  
    // Create the details section
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("task__new-details");
  
    // Date input
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.classList.add("visually-hidden");
    dateLabel.textContent = "Date";
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
  
    // Priority dropdown
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.classList.add("visually-hidden");
    priorityLabel.textContent = "Priority level";
  
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.name = "priority";
  
    const priorityOptions = [
      { value: "low", text: "Low" },
      { value: "medium", text: "Medium" },
      { value: "high", text: "High" },
      { value: "none", text: "None" }
    ];
  
    priorityOptions.forEach(optionData => {
      const option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.text;
      prioritySelect.appendChild(option);
    });
  
    // Append date and priority elements to the details div
    detailsDiv.appendChild(dateLabel);
    detailsDiv.appendChild(dateInput);
    detailsDiv.appendChild(priorityLabel);
    detailsDiv.appendChild(prioritySelect);
  
    // Append details div to the form
    form.appendChild(detailsDiv);
  
    // Append form to the modal
    modal.appendChild(form);
  
    // Create the modal controller
    const controllerDiv = document.createElement("div");
    controllerDiv.classList.add("task__modal--controller");
  
    // Cancel button
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancelTaskButton";
    cancelButton.textContent = "Cancel";
  
    // Add/Edit button (depending on mode)
    const actionButton = document.createElement("button");
    actionButton.id = mode === "add" ? "addTaskButton" : "editTaskButton";
    actionButton.textContent = mode === "add" ? "Add Task" : "Edit";
  
    // Append buttons to the controller div
    controllerDiv.appendChild(cancelButton);
    controllerDiv.appendChild(actionButton);
  
    // Append controller div to the modal
    modal.appendChild(controllerDiv);
  
    return modal;
}
