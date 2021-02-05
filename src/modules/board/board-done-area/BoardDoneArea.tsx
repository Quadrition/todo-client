import React from "react";

import styles from "./style.module.css";

import { BoardDoneAreaProps } from "./types";
import TaskOverviewContainer from "../../task/task-overview/TaskOverviewContainer";

import { Card, Space } from "antd";

import { FileDoneOutlined } from "@ant-design/icons";

function BoardDoneArea(props: BoardDoneAreaProps) {
  const title = (
    <Space>
      <FileDoneOutlined />
      Done tasks
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

export default BoardDoneArea;
