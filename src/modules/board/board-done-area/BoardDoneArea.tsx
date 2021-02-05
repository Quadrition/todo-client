import React from "react";

import styles from "./style.module.css";

import { Card, Space } from "antd";

import { FileDoneOutlined } from "@ant-design/icons";

function BoardDoneArea() {
  const title = (
    <Space>
      <FileDoneOutlined />
      Done tasks
    </Space>
  );

  return <Card title={title} className={styles.root}></Card>;
}

export default BoardDoneArea;
