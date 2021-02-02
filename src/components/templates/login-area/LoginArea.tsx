import React from "react";

import styles from "./style.module.css";

import LoginFormContainer from "../../organisms/login-form/LoginFormContainer";

import { Space } from "antd";

import { LoginOutlined } from "@ant-design/icons";

function LoginArea() {
  return (
    <div className={styles.root}>
      <Space direction="vertical" align="center" className={styles.titleArea}>
        <LoginOutlined />
        Login
      </Space>

      <LoginFormContainer />
    </div>
  );
}

export default LoginArea;
