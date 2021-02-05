import React from "react";

import styles from "./style.module.css";

import TaskOverviewContainer from "../../task/task-overview/TaskOverviewContainer";
import { BoardTodoAreaProps } from "./types";

import { Card, Space } from "antd";

import { ExceptionOutlined } from "@ant-design/icons";

function BoardTodoArea(props: BoardTodoAreaProps) {
  const title = (
    <Space>
      <ExceptionOutlined />
      Todo tasks
    </Space>
  );

  return (
    <div ref={props.drop} className={styles.drop}>
      <Card title={title} className={styles.root}>
        <Space direction="horizontal" wrap>
          {props.tasks.map((task) => (
            <TaskOverviewContainer task={task} />
          ))}
        </Space>
      </Card>
    </div>
  );
}

export default BoardTodoArea;
