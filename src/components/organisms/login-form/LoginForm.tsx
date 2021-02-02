import React from "react";

import styles from "./style.module.css";

import { Link } from "react-router-dom";

import { Form, Input, Button } from "antd";

import { KeyOutlined, MailOutlined } from "@ant-design/icons";

interface Props {
  emailHelp: string | undefined;
  emailValidateStatus:
    | ""
    | "warning"
    | "success"
    | "error"
    | "validating"
    | undefined;
  passwordHelp: string | undefined;
  passwordValidateStatus:
    | ""
    | "warning"
    | "success"
    | "error"
    | "validating"
    | undefined;
  onTextChange: () => void;
}

function LoginForm(props: Props) {
  return (
    <Form>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
          {
            max: 50,
            message: "Email must not have more than 50 characters",
          },
        ]}
        hasFeedback
        help={props.emailHelp}
        validateStatus={props.emailValidateStatus}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
          size="large"
          onChange={props.onTextChange}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please enter your password" },
          {
            min: 6,
            message: "Password must have more than 6 characters",
          },
          {
            max: 50,
            message: "Password must not have more than 50 characters",
          },
        ]}
        hasFeedback
        help={props.passwordHelp}
        validateStatus={props.passwordValidateStatus}
      >
        <Input.Password
          prefix={<KeyOutlined />}
          size="large"
          placeholder="Password"
          onChange={props.onTextChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
        <Link to="/register" className={styles.registerLink}>
          Don't have an account? Register
        </Link>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
