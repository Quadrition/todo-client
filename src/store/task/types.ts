import { Board } from "../board/types";

export const ADD_TASK = "task/add";
export const EDIT_TASK = "task/edit";
export const DELETE_TASK = "task/delete";

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

interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: { name: string; tags: Tag[]; task: Task };
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: { task: Task };
}

export type TaskActionTypes = AddTaskAction | EditTaskAction | DeleteTaskAction;
