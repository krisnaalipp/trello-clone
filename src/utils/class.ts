class Task {
  id: string;
  title: string;
  chat: number;
  like: number;
  assignees: string;
  attach: number;

  constructor(
    id: string,
    title: string,
    chat: number,
    like: number,
    assignees: string,
    attach: number
  ) {
    this.id = id;
    this.title = title;
    this.chat = chat;
    this.like = like;
    this.assignees = assignees;
    this.attach = attach;
  }
}

class TaskList {
  name: string;
  items: Task[];

  constructor(name: string, items: Task[]) {
    this.name = name;
    this.items = items;
  }
}

export { Task, TaskList };
