import React from "react";

import styles from "./style.module.css";

import NavigationBarActionsContainer from "../../molecules/nav-bar-actions/NavigationBarActionsContainer";

import { Link } from "react-router-dom";

import { Image } from "antd";

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

      <NavigationBarActionsContainer />
    </div>
  );
}

export default NavigationBar;
