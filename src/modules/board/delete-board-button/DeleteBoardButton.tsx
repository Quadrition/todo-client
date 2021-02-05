import React from "react";

import { DeleteBoardButtonProps } from "./types";

import { Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

function DeleteBoardButton(props: DeleteBoardButtonProps) {
  return (
    <div onClick={props.onPropagationClick}>
      <Popconfirm
        title="Are you sure?"
        onConfirm={props.onRemove}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined onClick={props.onPropagationClick} />
      </Popconfirm>
    </div>
  );
}

export default DeleteBoardButton;
