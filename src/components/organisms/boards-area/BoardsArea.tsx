import React from "react";

import styles from "./style.module.css";

import { BoardsAreaProps } from "./types";

import { Empty, Space } from "antd";

function BoardsArea(props: BoardsAreaProps) {
  return props.boards.length === 0 ? (
    <Empty description="No boards" className={styles.empty} />
  ) : (
    <Space></Space>
  );
}

export default BoardsArea;
