import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  TaskActionTypes,
  TaskState,
  SWITCH_TYPE,
} from "./types";

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
    case EDIT_TASK:
      const tasks = [...state.tasks];
      tasks[tasks.indexOf(action.payload.task)].name = action.payload.name;
      tasks[tasks.indexOf(action.payload.task)].tags = action.payload.tags;
      return {
        ...state,
        tasks: [...tasks],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task !== action.payload.task)],
      };
    case SWITCH_TYPE:
      const old_tasks = [...state.tasks];
      old_tasks[old_tasks.indexOf(action.payload.task)].type =
        action.payload.task.type === "done" ? "todo" : "done";
      return {
        ...state,
        tasks: [...old_tasks],
      };
    default:
      return state;
  }
}
