import React from "react";

import styles from "./style.module.css";

import NavigationBar from "../../../core/nav-bar/NavigationBar";
import HomeTemplateContainer from "../home-template/HomeTemplateContainer";

import { Layout } from "antd";

const { Header, Content } = Layout;

function HomePage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavigationBar />
      </Header>
      <Content className={styles.content}>
        <HomeTemplateContainer />
      </Content>
    </Layout>
  );
}

export default HomePage;
