/* eslint-disable eqeqeq */
export default class Project {
  constructor(name, id) {
    this._id = id;
    this._name = name;
    this._taskList = [];
    this._completed = false;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get taskList() {
    return this._taskList;
  }

  appendTask(task) {
    this._taskList.push(task);
  }

  findTask(id) {
    return this._taskList.filter((task) => task._id == id)[0];
  }

  remove(taskItem) {
    const index = this._taskList.indexOf(taskItem);
    if (index > -1) {
      this._taskList.splice(index, 1);
    }
  }

  removeTask(taskId) {
    const currTask = this.findTask(taskId);
    this.remove(currTask, this._taskList);
  }

  completeTask(taskId) {
    const currTask = this.findTask(taskId);
    currTask.completed = true;
  }

  reverseCompleteTask(taskId) {
    const currTask = this.findTask(taskId);
    currTask.completed = false;
  }

  // todo: to implement this in Task class
  displayTask() {
    this._taskList.forEach((task) => {
      task.displayTask();
    });
  }
}
