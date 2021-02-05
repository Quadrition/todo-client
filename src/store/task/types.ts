import { Board } from "../board/types";

export const ADD_TASK = "task/add";

export interface Task {
  name: string;
  tags: string[];
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
