import { ADD_TASK, TaskActionTypes, TaskState } from "./types";

const initialState: TaskState = { tasks: [] };

export function taskReducer(
  state = initialState,
  action: TaskActionTypes
): TaskState {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    default:
      return state;
  }
}
