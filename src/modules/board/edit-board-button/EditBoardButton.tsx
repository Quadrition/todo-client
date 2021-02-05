import React from "react";

import { EditBoardButtonProps } from "./types";

import { Button, Form, Input, Popover, Space } from "antd";

import { AlignLeftOutlined, EditOutlined } from "@ant-design/icons";

function EditBoardButton(props: EditBoardButtonProps) {
  const content = (
    <Form
      onFinish={props.onEdit}
      form={props.form}
      onClick={props.onPropagationClick}
    >
      <Space direction="vertical" size={0} align="end">
        <Form.Item
          initialValue={props.board.name}
          name="name"
          rules={[
            { required: true, message: "Required" },
            {
              max: 24,
              message: "Too long",
            },
            {
              min: 3,
              message: "Too short",
            },
          ]}
        >
          <Input placeholder="new name" prefix={<AlignLeftOutlined />} />
        </Form.Item>
        <Form.Item noStyle>
          <Button htmlType="submit" type="primary" size="small">
            edit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );

  return (
    <Popover
      placement="bottomRight"
      content={content}
      trigger="click"
      visible={props.popoverVisible}
      onVisibleChange={props.onPopoverVisibleChange}
    >
      <EditOutlined onClick={props.onPropagationClick} />
    </Popover>
  );
}

export default EditBoardButton;
