[x] Add strikethrough effect when task is completed
[x] Solve the logic bug where upon rendering a new task:
-> [x] The new task list includes the old completed ones (but now as incomplete)
-> [x] The completedTaskList array still holds the previously completed tasks, but now the task appears as not completed yet
\*\*\*\* Intended behaviour:

1. Upon each new tasks being add, all tasks that are in the completedTaskList will be added ".completed" class
2. Alternatively, instead of using array, can just use an attribute to indicate completed or not.
   ~> This means no changes to taskList.
   ~> each time new task is added, go through the taskList and add ".completed" class to those with .\_completed = true;

[] Add conditional statement to not show the date box if no date is provided
[] Add a view page for completed task
-> [] addEventListener for completed icon
-> [] render all tasks (across all projects) with .\_completed == true
[] Add a view page for general task view
-> [] addEventListener for inbox icon
-> [] render all tasks (across all projects) with .\_completed == false

[] Add ability to add projects
-> [] new project modal
-> [] upon creation, opens up a new page with its own set of tasks
-> []
