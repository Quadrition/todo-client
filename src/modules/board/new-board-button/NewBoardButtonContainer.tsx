import React from "react";

import { Board } from "../../../store/board/types";
import NewBoardButton from "./NewBoardButton";

import { useDispatch } from "react-redux";
import { addBoard } from "../../../store/board/actions";

import { Form, message } from "antd";

function NewBoardButtonContainer() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [popoverVisible, setPopoverVisible] = React.useState<boolean>(false);

  const handleAdd = (value: Board) => {
    dispatch(addBoard(value));
    setPopoverVisible(false);
    message.success("Successfully added");
  };

  const handlePopoverVisibleChange = (visible: boolean) => {
    setPopoverVisible(visible);

    if (!visible) {
      form.resetFields();
    }
  };

  return (
    <NewBoardButton
      onAdd={handleAdd}
      popoverVisible={popoverVisible}
      onPopoverVisibleChange={handlePopoverVisibleChange}
      form={form}
    />
  );
}

export default NewBoardButtonContainer;
