import { FormInstance } from "antd";
import { Tag, Task } from "../../../store/task/types";

export interface EditTaskButtonContainerProps {
  task: Task;
}

export interface EditTaskButtonProps {
  selectedTags: Tag[];
  onTagChange: (tag: Tag, checked: boolean) => void;
  onEdit: (value: { name: string }) => void;
  popoverVisible: boolean;
  onPopoverVisibleChange: (visible: boolean) => void;
  form: FormInstance<any>;
  task: Task;
}
