import React from "react";

import styles from "./style.module.css";

import { Space } from "antd";

import { SnippetsOutlined } from "@ant-design/icons";

function BoardsTitle() {
  return (
    <Space size="middle" align="center" className={styles.title}>
      <SnippetsOutlined />
      My boards
    </Space>
  );
}

export default BoardsTitle;
