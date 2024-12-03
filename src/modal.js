class Modal {
  constructor(modalType) {
    this.type = modalType;
  }

  modal = generateModal();

  generateModal() {
    if (this.type === "project") {
      generateProjectModal();
    } else {
      generateTaskModal();
    }
  }
}
