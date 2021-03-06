import React from "react";

import styles from "./style.module.css";

import { NewBoardButtonProps } from "./types";

import { Button, Form, Input, Popover, Space } from "antd";

import {
  AlignLeftOutlined,
  DiffOutlined,
  PlusOutlined,
} from "@ant-design/icons";

function NewBoardButton(props: NewBoardButtonProps) {
  const title = (
    <Space className={styles.title}>
      <DiffOutlined />
      New board
    </Space>
  );

  const content = (
    <Form onFinish={props.onAdd} form={props.form}>
      <Space direction="vertical" size={0} align="end">
        <Form.Item
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
          <Input placeholder="name" prefix={<AlignLeftOutlined />} />
        </Form.Item>
        <Form.Item noStyle>
          <Button htmlType="submit" type="primary" size="small">
            add
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );

  return (
    <Popover
      placement="bottomRight"
      title={title}
      content={content}
      trigger="click"
      visible={props.popoverVisible}
      onVisibleChange={props.onPopoverVisibleChange}
    >
      <Button
        type="primary"
        size="large"
        shape="circle"
        icon={<PlusOutlined />}
      />
    </Popover>
  );
}

export default NewBoardButton;
