import React from "react";

import { NavigationBarActionsProps } from "./types";

import { Link } from "react-router-dom";

import { Menu } from "antd";

import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

function NavigationBarActions(props: NavigationBarActionsProps) {
  return (
    <Menu mode="horizontal">
      {props.isLogged ? (
        <Menu.Item onClick={props.onLogout} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      ) : (
        <Menu.Item icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default NavigationBarActions;
