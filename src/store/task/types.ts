import { Board } from "../board/types";

export const ADD_TASK = "task/add";

export type Tag = "bug" | "feature" | "improve";

export interface Task {
  name: string;
  tags: Tag[];
  type: "todo" | "done";
  board: Board;
}

export interface TaskState {
  tasks: Task[];
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: { task: Task };
}

export type TaskActionTypes = AddTaskAction;
