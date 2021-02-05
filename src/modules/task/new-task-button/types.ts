import { FormInstance } from "antd";
import { Board } from "../../../store/board/types";
import { Tag } from "../../../store/task/types";

export interface NewTaskButtonContainerProps {
  selectedBoard: Board;
}

export interface NewTaskButtonProps {
  selectedTags: Tag[];
  onTagChange: (tag: Tag, checked: boolean) => void;
  onAdd: (value: { name: string }) => void;
  popoverVisible: boolean;
  onPopoverVisibleChange: (visible: boolean) => void;
  form: FormInstance<any>;
}
