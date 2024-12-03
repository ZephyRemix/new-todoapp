export default class Task {
    constructor(title, dueDate, priority, id, project) {
        this._title = title;
        this._dueDate = dueDate;
        this._priority = priority;
        this._id = id;
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

    get id() {
        return this._id;
    }

    static comparePriority = (a, b) => {
        if (a._priority === "high" && (b._priority === "medium" || b._priority === "low")) {
            return -1;
        }
        if (a._priority === "medium" && b._priority === "low") {
            return -1;
        }
        if (a._priority === "medium" && b._priority === "high") {
            return 1;
        }
        if (a._priority === "low" && (b._priority === "high" || b._priority === "medium")) {
            return 1;
        }
        return 0;
    }
}
