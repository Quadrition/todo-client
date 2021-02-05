import React from "react";

import { DeleteTaskButtonProps } from "./types";

import { Button, Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

function DeleteTaskButton(props: DeleteTaskButtonProps) {
  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={props.onRemove}
      okText="Yes"
      cancelText="No"
    >
      <Button shape="circle" icon={<DeleteOutlined />} />
    </Popconfirm>
  );
}

export default DeleteTaskButton;
