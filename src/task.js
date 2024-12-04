export default class Task {
  constructor(title, dueDate, priority, id, project) {
    this._title = title;
    this._dueDate = dueDate;
    this._priority = priority;
    this._id = id;
    this._completed = false;
    this._projectRef = project;
  }

  get title() {
    return this._title;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get projectRef() {
    return this._projectRef;
  }

  get completed() {
    return this._completed;
  }

  get id() {
    return this._id;
  }

  set title(title) {
    this._title = title;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }

  set completed(status) {
    this._completed = status;
  }

  edit(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static comparePriority = (a, b) => {
    if (
      a._priority === 'high' &&
      (b._priority === 'medium' || b._priority === 'low')
    ) {
      return -1;
    }
    if (a._priority === 'medium' && b._priority === 'low') {
      return -1;
    }
    if (a._priority === 'medium' && b._priority === 'high') {
      return 1;
    }
    if (
      a._priority === 'low' &&
      (b._priority === 'high' || b._priority === 'medium')
    ) {
      return 1;
    }
    return 0;
  };
}
