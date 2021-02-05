import React from "react";

import styles from "./style.module.css";

import { NewTaskButtonProps } from "./types";
import { Tag as TagModel } from "../../../store/task/types";

import { Button, Form, Input, Popover, Space, Tag } from "antd";

import {
  AlignLeftOutlined,
  DiffOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { CheckableTag } = Tag;

function NewTaskButton(props: NewTaskButtonProps) {
  const title = (
    <Space className={styles.title}>
      <DiffOutlined />
      New task
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
        <Space size={0} direction="horizontal" className={styles.tags}>
          {(["feature", "bug", "improve"] as TagModel[]).map((tag) => (
            <CheckableTag
              key={tag}
              checked={props.selectedTags.indexOf(tag) > -1}
              onChange={(checked) => props.onTagChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
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

export default NewTaskButton;
