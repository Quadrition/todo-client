import { Board } from "../../../store/board/types";
import { Task } from "../../../store/task/types";

export interface BoardDoneAreaContainerProps {
  selectedBoard: Board;
}

export interface BoardDoneAreaProps {
  tasks: Task[];
}
