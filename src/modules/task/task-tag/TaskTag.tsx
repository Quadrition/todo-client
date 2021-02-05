import React from "react";

import { TaskTagProps } from "./types";

import { Tag } from "antd";

function TaskTag(props: TaskTagProps) {
  return (
    <Tag
      color={
        props.tag === "bug"
          ? "#f50"
          : props.tag === "feature"
          ? "#87d068"
          : "#2db7f5"
      }
    >
      {props.tag}
    </Tag>
  );
}

export default TaskTag;
