import React from "react";

import styles from "./style.module.css";

import { BoardPageTitleProps } from "./types";

import { Space } from "antd";

import { FileTextOutlined } from "@ant-design/icons";

function BoardPageTitle(props: BoardPageTitleProps) {
  return (
    <Space size="middle" align="center" className={styles.title}>
      <FileTextOutlined />
      {props.name}
    </Space>
  );
}

export default BoardPageTitle;
