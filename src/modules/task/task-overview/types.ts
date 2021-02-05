import { DragElementWrapper, DragSourceOptions } from "react-dnd";
import { Task } from "../../../store/task/types";

export interface TaskOverviewContainerProps {
  task: Task;
}

export interface TaskOverviewProps {
  task: Task;
  drag: DragElementWrapper<DragSourceOptions>;
}
