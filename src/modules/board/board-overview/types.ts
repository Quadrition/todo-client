import { Board } from "../../../store/board/types";
import { Task } from "../../../store/task/types";

export interface BoardOverviewContainerProps {
  board: Board;
}

export interface BoardOverviewProps {
  tasks: {
    count: number;
    done: boolean;
  };
  board: Board;
  onBoardClick: () => void;
}
