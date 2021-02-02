import React from "react";

import NavigationBar from "../../components/organisms/nav-bar/NavigationBar";
import HomeTemplateContainer from "../../components/templates/home-template/HomeTemplateContainer";

import styles from "./style.module.css";

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
