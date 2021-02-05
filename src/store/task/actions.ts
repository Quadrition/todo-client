import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  Tag,
  Task,
  TaskActionTypes,
} from "./types";

export function addTask(task: Task): TaskActionTypes {
  return {
    type: ADD_TASK,
    payload: { task },
  };
}

export function editTask(
  name: string,
  tags: Tag[],
  task: Task
): TaskActionTypes {
  return {
    type: EDIT_TASK,
    payload: { name, tags, task },
  };
}

export function removeTask(task: Task): TaskActionTypes {
  return {
    type: REMOVE_TASK,
    payload: { task },
  };
}
