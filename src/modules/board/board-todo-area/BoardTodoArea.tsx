import React from "react";

import styles from "./style.module.css";

import { Card } from "antd";

function BoardTodoArea() {
  return <Card title="Todo tasks" className={styles.root}></Card>;
}

export default BoardTodoArea;
