import React from "react";

import styles from "./style.module.css";

import BoardOverviewContainer from "../../board/board-overview/BoardOverviewContainer";
import { HomeBoardsAreaProps } from "./types";

import { Empty, Space } from "antd";

function HomeBoardsArea(props: HomeBoardsAreaProps) {
  return props.boards.length === 0 ? (
    <Empty description="No boards" className={styles.empty} />
  ) : (
    <Space wrap size="middle">
      {props.boards.map((board) => (
        <BoardOverviewContainer board={board} />
      ))}
    </Space>
  );
}

export default HomeBoardsArea;
