import { Form, message } from "antd";
import React from "react";

import { useDispatch } from "react-redux";
import { editBoard } from "../../../store/board/actions";

import { Board } from "../../../store/board/types";
import EditBoardButton from "./EditBoardButton";
import { EditBoardButtonContainerProps } from "./types";

function EditBoardButtonContainer(props: EditBoardButtonContainerProps) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [popoverVisible, setPopoverVisible] = React.useState<boolean>(false);

  const handleEdit = (value: Board) => {
    dispatch(editBoard(props.board, value.name));
    setPopoverVisible(false);
    message.success("Successfully edited");
  };

  const handlePopoverVisibleChange = (visible: boolean) => {
    setPopoverVisible(visible);

    if (!visible) {
      form.resetFields();
    }
  };

  const handlePropagationClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <EditBoardButton
      board={props.board}
      onEdit={handleEdit}
      popoverVisible={popoverVisible}
      onPopoverVisibleChange={handlePopoverVisibleChange}
      form={form}
      onPropagationClick={handlePropagationClick}
    />
  );
}

export default EditBoardButtonContainer;
