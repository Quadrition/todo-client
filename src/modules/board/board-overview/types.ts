import { Board } from "../../../store/board/types";

export interface BoardOverviewContainerProps {
  board: Board;
}

export interface BoardOverviewProps {
  tasks: number;
  board: Board;
  onBoardClick: () => void;
}
