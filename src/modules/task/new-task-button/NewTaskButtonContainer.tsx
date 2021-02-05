import React from "react";

import { NewTaskButtonContainerProps } from "./types";

import { useDispatch } from "react-redux";

import { Tag } from "../../../store/task/types";
import { addTask } from "../../../store/task/actions";
import NewTaskButton from "./NewTaskButton";

import { Form, message } from "antd";

function NewTaskButtonContainer(props: NewTaskButtonContainerProps) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [popoverVisible, setPopoverVisible] = React.useState<boolean>(false);

  const [selectedTags, setSelectedTags] = React.useState<Tag[]>([]);

  const handleTagChange = (tag: Tag, checked: boolean) => {
    setSelectedTags(
      checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    );
  };

  const handleAdd = (value: { name: string }) => {
    dispatch(
      addTask({
        name: value.name,
        tags: selectedTags,
        type: "todo",
        board: props.selectedBoard,
      })
    );
    setPopoverVisible(false);
    message.success("Successfully added");
  };

  const handlePopoverVisibleChange = (visible: boolean) => {
    setPopoverVisible(visible);

    if (!visible) {
      form.resetFields();
      setSelectedTags([]);
    }
  };

  return (
    <NewTaskButton
      selectedTags={selectedTags}
      onTagChange={handleTagChange}
      onAdd={handleAdd}
      popoverVisible={popoverVisible}
      onPopoverVisibleChange={handlePopoverVisibleChange}
      form={form}
    />
  );
}

export default NewTaskButtonContainer;
