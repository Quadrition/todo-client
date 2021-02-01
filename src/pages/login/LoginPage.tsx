import React from "react";

import styles from "./style.module.css";

import LoginArea from "../../templates/login-area/LoginArea";

import {
  Layout,
  Input,
  Button,
  Row,
  Col,
  Image,
  Typography,
  notification,
} from "antd";

const { Content } = Layout;

function LoginPage() {
  return (
    <Layout className={styles.layout}>
      <Content>
        <Row className={styles.rowContent}>
          <Col sm={12} md={14} lg={16} className={styles.imageArea}></Col>
          <Col xs={24} sm={12} md={10} lg={8} className={styles.loginArea}>
            <LoginArea />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default LoginPage;
