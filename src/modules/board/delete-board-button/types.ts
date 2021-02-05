import { Board } from "../../../store/board/types";

export interface DeleteBoardButtonContainerProps {
  board: Board;
}

export interface DeleteBoardButtonProps {
  onRemove: () => void;
  onPropagationClick: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}
