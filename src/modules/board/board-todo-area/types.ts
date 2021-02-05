import { Board } from "../../../store/board/types";
import { Task } from "../../../store/task/types";

export interface BoardTodoAreaContainerProps {
  selectedBoard: Board;
}

export interface BoardTodoAreaProps {
  tasks: Task[];
}
