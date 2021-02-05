import React from "react";

import styles from "./style.module.css";

import { Card, Space } from "antd";

import { ExceptionOutlined } from "@ant-design/icons";

function BoardTodoArea() {
  const title = (
    <Space>
      <ExceptionOutlined />
      Todo tasks
    </Space>
  );

  return <Card title={title} className={styles.root}></Card>;
}

export default BoardTodoArea;
