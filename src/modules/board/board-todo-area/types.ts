import { DragElementWrapper } from "react-dnd";
import { Board } from "../../../store/board/types";
import { Task } from "../../../store/task/types";

export interface BoardTodoAreaContainerProps {
  selectedBoard: Board;
}

export interface BoardTodoAreaProps {
  tasks: Task[];
  drop: DragElementWrapper<any>;
}
