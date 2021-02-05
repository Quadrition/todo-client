import React from "react";

import DeleteTaskButton from "./DeleteTaskButton";
import { DeleteTaskButtonContainerProps } from "./types";

import { useDispatch } from "react-redux";
import { removeTask } from "../../../store/task/actions";

import { message } from "antd";

function DeleteTaskButtonContainer(props: DeleteTaskButtonContainerProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(props.task));
    message.success("Successfully deleted");
  };

  return <DeleteTaskButton onRemove={handleRemove} />;
}

export default DeleteTaskButtonContainer;
