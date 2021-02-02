import React from "react";

import styles from "./style.module.css";

import { Link } from "react-router-dom";

import { Image, Menu } from "antd";

import { LoginOutlined } from "@ant-design/icons";

function NavigationBar() {
  return (
    <div className={styles.root}>
      <Link to="/" className={styles.logoLink}>
        <Image
          preview={false}
          width={200}
          src={require("../../../assets/images/logo-nav.png").default}
        />
      </Link>

      <div className={styles.emptySpace}></div>

      <Menu mode="horizontal">
        <Menu.Item icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavigationBar;
