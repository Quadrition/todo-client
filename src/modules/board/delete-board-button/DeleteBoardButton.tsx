import React from "react";

import { DeleteBoardButtonProps } from "./types";

import { Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

function DeleteBoardButton(props: DeleteBoardButtonProps) {
  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={props.onRemove}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined />
    </Popconfirm>
  );
}

export default DeleteBoardButton;
