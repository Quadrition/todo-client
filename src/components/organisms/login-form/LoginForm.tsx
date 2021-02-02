import React from "react";

import { LoginFormProps } from "./types";

import { Form, Input, Button } from "antd";

import { KeyOutlined, MailOutlined } from "@ant-design/icons";

function LoginForm(props: LoginFormProps) {
  return (
    <Form onFinish={props.onLogin}>
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
      >
        <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
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
      >
        <Input.Password
          prefix={<KeyOutlined />}
          size="large"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={props.loading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
