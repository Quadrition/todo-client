import { Task } from "../../../store/task/types";

export interface DeleteTaskButtonContainerProps {
  task: Task;
}

export interface DeleteTaskButtonProps {
  onRemove: () => void;
}
