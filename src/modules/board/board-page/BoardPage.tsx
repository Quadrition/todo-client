import React from "react";

import styles from "./style.module.css";

import BoardTodoArea from "../board-todo-area/BoardTodoArea";
import NavigationBar from "../../../core/nav-bar/NavigationBar";
import BoardDoneArea from "../board-done-area/BoardDoneArea";

import { Col, Layout, Row } from "antd";
import BoardPageTitleContainer from "../board-page-title/BoardPageTitleContainer";

const { Header, Content } = Layout;

function BoardPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavigationBar />
      </Header>
      <Content className={styles.content}>
        <Row className={styles.headerArea}>
          <Col flex={1}>
            <BoardPageTitleContainer />
          </Col>
        </Row>
        <Row gutter={16} className={styles.tasksArea}>
          <Col flex={1}>
            <BoardTodoArea />
          </Col>
          <Col flex={1}>
            <BoardDoneArea />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default BoardPage;
