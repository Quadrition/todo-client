import { Board } from "../../../store/board/types";

import { FormInstance } from "antd";

export interface EditBoardButtonContainerProps {
  board: Board;
}

export interface EditBoardButtonProps {
  board: Board;
  onEdit: (value: Board) => void;
  popoverVisible: boolean;
  onPopoverVisibleChange: (visible: boolean) => void;
  form: FormInstance<any>;
  onPropagationClick: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}
