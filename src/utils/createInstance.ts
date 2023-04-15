import { TaskList, Task } from "./class";

function createTaskList(data: { name: string; items: any[] }[]): TaskList[] {
  const taskLists: TaskList[] = [];

  for (const taskListData of data) {
    const tasks: Task[] = [];

    for (const taskData of taskListData.items) {
      const task = new Task(
        taskData.id.toString(),
        taskData.title,
        taskData.chat || 0,
        taskData.like || 0,
        taskData.assignees,
        taskData.attach || 0
      );
      tasks.push(task);
    }

    const taskList = new TaskList(taskListData.name, tasks);
    taskLists.push(taskList);
  }

  return taskLists;
}

export default createTaskList;
