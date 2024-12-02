export default class Task {
    constructor(title, dueDate, priority, projectName, id) {
        this._title = title;
        this._dueDate = dueDate;
        this._priority = priority;
        this._projectName = projectName;
        this._id = id;
    }

    get title() {
        return this._title;
    }

    get dueDate() {
        return this._dueDate;
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
