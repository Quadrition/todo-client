import React from "react";

import styles from "./style.module.css";

import { HomeTemplateProps } from "./types";

import BoardsTitle from "../../molecules/boards-title/BoardsTitle";

import { Col, Result, Row, Space } from "antd";

function HomeTemplate(props: HomeTemplateProps) {
  return props.isLogged ? (
    <Space direction="vertical" size="large" className={styles.root}>
      <Row align="middle">
        <Col flex="auto">
          <BoardsTitle />
        </Col>
      </Row>
    </Space>
  ) : (
    <Result
      status="403"
      title="Forbidden"
      subTitle="Sorry, you must be authorized to see boards"
    />
  );
}

export default HomeTemplate;
