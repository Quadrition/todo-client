import React from "react";

import { EditTaskButtonContainerProps } from "./types";

import { useDispatch } from "react-redux";

import { Tag } from "../../../store/task/types";
import { editTask } from "../../../store/task/actions";
import EditTaskButton from "./EditTaskButton";

import { Form, message } from "antd";

function EditTaskButtonContainer(props: EditTaskButtonContainerProps) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [popoverVisible, setPopoverVisible] = React.useState<boolean>(false);

  const [selectedTags, setSelectedTags] = React.useState<Tag[]>(
    props.task.tags
  );

  const handleTagChange = (tag: Tag, checked: boolean) => {
    setSelectedTags(
      checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    );
  };

  const handleEdit = (value: { name: string }) => {
    dispatch(editTask(value.name, selectedTags, props.task));
    setPopoverVisible(false);
    message.success("Successfully edited");
  };

  const handlePopoverVisibleChange = (visible: boolean) => {
    setPopoverVisible(visible);
  };

  return (
    <EditTaskButton
      selectedTags={selectedTags}
      onTagChange={handleTagChange}
      onEdit={handleEdit}
      popoverVisible={popoverVisible}
      onPopoverVisibleChange={handlePopoverVisibleChange}
      form={form}
      task={props.task}
    />
  );
}

export default EditTaskButtonContainer;
