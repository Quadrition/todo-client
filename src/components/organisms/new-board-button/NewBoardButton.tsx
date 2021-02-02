import React from "react";

import styles from "./style.module.css";

import { Button, Form, Input, Popover, Space } from "antd";

import {
  AlignLeftOutlined,
  DiffOutlined,
  PlusOutlined,
} from "@ant-design/icons";

function NewBoardButton() {
  const title = (
    <Space className={styles.title}>
      <DiffOutlined />
      New board
    </Space>
  );

  const content = (
    <Form>
      <Space direction="vertical" size={0} align="end">
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="name" prefix={<AlignLeftOutlined />} />
        </Form.Item>
        <Form.Item noStyle>
          <Button type="primary" size="small">
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
