[x] Add strikethrough effect when task is completed
[x] Solve the logic bug where upon rendering a new task:
-> [x] The new task list includes the old completed ones (but now as incomplete)
-> [x] The completedTaskList array still holds the previously completed tasks, but now the task appears as not completed yet
\*\*\*\* Intended behaviour:

1. Upon each new tasks being add, all tasks that are in the completedTaskList will be added ".completed" class
2. Alternatively, instead of using array, can just use an attribute to indicate completed or not.
   ~> This means no changes to taskList.
   ~> each time new task is added, go through the taskList and add ".completed" class to those with .\_completed = true;

[x] Add conditional statement to not show the date box if no date is provided
[x] Add a view page for completed task
-> [x] addEventListener for completed icon
-> [x] render all tasks (across all projects) with .\_completed == true
[x] Add a view page for general task view
-> [x] addEventListener for inbox icon
-> [x] render all tasks (across all projects) with .\_completed == false
[] Add sort icon button to sort task based on priority

[] Add ability to add projects
-> [] new project modal
-> [] upon creation, opens up a new page with its own set of tasks
-> []
