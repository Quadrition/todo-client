import { Board } from "../../../store/board/types";

export interface DeleteBoardButtonContainerProps {
  board: Board;
}

export interface DeleteBoardButtonProps {
  onRemove: () => void;
  onDeleteButtonClick: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}
