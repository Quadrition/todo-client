import {
  DragElementWrapper,
  DragObjectWithType,
  DropTargetMonitor,
} from "react-dnd";
import { Board } from "../../../store/board/types";
import { Task } from "../../../store/task/types";

export interface BoardDoneAreaContainerProps {
  selectedBoard: Board;
}

export interface BoardDoneAreaProps {
  drop: DragElementWrapper<any>;
  tasks: Task[];
}
