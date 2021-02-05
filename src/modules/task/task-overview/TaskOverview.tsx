import React from "react";

import { TaskOverviewProps } from "./types";
import TaskTag from "../task-tag/TaskTag";

import { Button, Card, Col, Row, Space, Typography } from "antd";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

function TaskOverview(props: TaskOverviewProps) {
  return (
    <Card size="small" hoverable style={{ maxWidth: 220 }}>
      <Row align="middle" wrap={false} gutter={10}>
        <Col flex="auto">
          <Paragraph ellipsis={{ rows: 2 }}>{props.task.name}</Paragraph>
          {props.task.tags.map((tag) => (
            <TaskTag tag={tag} />
          ))}
        </Col>
        <Col>
          <Space size="small" direction="vertical">
            <Button shape="circle">
              <EditOutlined />
            </Button>
            <Button shape="circle">
              <DeleteOutlined />
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default TaskOverview;
