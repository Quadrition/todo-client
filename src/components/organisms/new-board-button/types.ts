import { Board } from "../../../store/board/types";

import { FormInstance } from "antd";

export interface NewBoardButtonProps {
  onAdd: (value: Board) => void;
  popoverVisible: boolean;
  onPopoverVisibleChange: (visible: boolean) => void;
  form: FormInstance<any>;
}
