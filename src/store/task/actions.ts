import { ADD_TASK, Task, TaskActionTypes } from "./types";

export function addTask(task: Task): TaskActionTypes {
  return {
    type: ADD_TASK,
    payload: { task },
  };
}
