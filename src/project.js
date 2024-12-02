export default class Project {
    constructor(name, id) {
        this._id = id;
        this._name = name;
        this._taskList = [];
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
        return this._taskList.filter((task) => task._id === id);
    }

    removeTask(taskId) {
        const currTask = this.findTask(taskId)[0];
        const index = this._taskList.indexOf(currTask);
        if (index > -1) { 
            this._taskList.splice(index, 1);
        };
    };

    // todo: to implement this in Task class
    displayTask() {
        this._taskList.forEach(task => {
            task.displayTask();
        });
    }
}
