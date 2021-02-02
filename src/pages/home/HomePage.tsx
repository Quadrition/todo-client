import React from "react";

import NavigationBar from "../../components/nav-bar/NavigationBar";

import styles from "./style.module.css";

import { Layout } from "antd";

const { Header, Content } = Layout;

function HomePage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavigationBar />
      </Header>
      <Content>Content</Content>
    </Layout>
  );
}

export default HomePage;
