import React from "react";

import styles from "./style.module.css";

import BoardTodoAreaContainer from "../board-todo-area/BoardTodoAreaContainer";
import NavigationBar from "../../../core/nav-bar/NavigationBar";
import BoardDoneAreaContainer from "../board-done-area/BoardDoneAreaContainer";
import BoardPageTitleContainer from "../board-page-title/BoardPageTitleContainer";
import { BoardPageProps } from "./types";
import NewTaskButtonContainer from "../../task/new-task-button/NewTaskButtonContainer";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Col, Layout, Row } from "antd";

const { Header, Content } = Layout;

function BoardPage(props: BoardPageProps) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavigationBar />
      </Header>
      <Content className={styles.content}>
        <Row align="middle" className={styles.headerArea}>
          <Col flex={1}>
            <BoardPageTitleContainer />
          </Col>
          <Col>
            <NewTaskButtonContainer selectedBoard={props.selectedBoard} />
          </Col>
        </Row>
        <DndProvider backend={HTML5Backend}>
          <Row wrap={false} gutter={16} className={styles.tasksArea}>
            <Col span={12}>
              <BoardTodoAreaContainer selectedBoard={props.selectedBoard} />
            </Col>
            <Col span={12}>
              <BoardDoneAreaContainer selectedBoard={props.selectedBoard} />
            </Col>
          </Row>
        </DndProvider>
      </Content>
    </Layout>
  );
}

export default BoardPage;
