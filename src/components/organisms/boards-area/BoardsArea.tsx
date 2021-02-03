import React from "react";

import styles from "./style.module.css";

import BoardOverviewContainer from "../board-overview/BoardOverviewContainer";
import { BoardsAreaProps } from "./types";

import { Empty, Space } from "antd";

function BoardsArea(props: BoardsAreaProps) {
  return props.boards.length === 0 ? (
    <Empty description="No boards" className={styles.empty} />
  ) : (
    <Space wrap>
      {props.boards.map((board) => (
        <BoardOverviewContainer board={board} />
      ))}
    </Space>
  );
}

export default BoardsArea;
