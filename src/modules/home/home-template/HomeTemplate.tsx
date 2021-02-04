import React from "react";

import styles from "./style.module.css";

import { HomeTemplateProps } from "./types";

import HomeBoardsTitle from "../home-boards-title/HomeBoardsTitle";
import NewBoardButtonContainer from "../../board/new-board-button/NewBoardButtonContainer";
import BoardsAreaContainer from "../boards-area/BoardsAreaContainer";

import { Col, Result, Row, Space } from "antd";

function HomeTemplate(props: HomeTemplateProps) {
  return props.isLogged ? (
    <Space direction="vertical" size="large" className={styles.root}>
      <Row align="middle">
        <Col flex="auto">
          <HomeBoardsTitle />
        </Col>
        <Col>
          <NewBoardButtonContainer />
        </Col>
      </Row>
      <BoardsAreaContainer />
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
