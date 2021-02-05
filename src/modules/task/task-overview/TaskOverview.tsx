import React from "react";

import { TaskOverviewProps } from "./types";
import TaskTag from "../task-tag/TaskTag";
import EditTaskButtonContainer from "../edit-task-button/EditTaskButtonContainer";
import DeleteTaskButtonContainer from "../delete-task-button/DeleteTaskButtonContainer";

import { Card, Col, Row, Space, Typography } from "antd";

const { Paragraph } = Typography;

function TaskOverview(props: TaskOverviewProps) {
  return (
    <div ref={props.drag}>
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
              <EditTaskButtonContainer task={props.task} />
              <DeleteTaskButtonContainer task={props.task} />
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default TaskOverview;
