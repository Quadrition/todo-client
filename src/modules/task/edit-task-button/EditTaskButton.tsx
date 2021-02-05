import React from "react";

import styles from "./style.module.css";

import { EditTaskButtonProps } from "./types";
import { Tag as TagModel } from "../../../store/task/types";

import { Button, Form, Input, Popover, Space, Tag } from "antd";

import { AlignLeftOutlined, EditOutlined } from "@ant-design/icons";

const { CheckableTag } = Tag;

function EditTaskButton(props: EditTaskButtonProps) {
  const content = (
    <Form onFinish={props.onEdit} form={props.form}>
      <Space direction="vertical" size={0} align="end">
        <Form.Item
          initialValue={props.task.name}
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
            edit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={props.popoverVisible}
      onVisibleChange={props.onPopoverVisibleChange}
    >
      <Button shape="circle" icon={<EditOutlined />} />
    </Popover>
  );
}

export default EditTaskButton;
