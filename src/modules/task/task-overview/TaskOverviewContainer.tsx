import React from "react";

import TaskOverview from "./TaskOverview";
import { TaskOverviewContainerProps } from "./types";

function TaskOverviewContainer(props: TaskOverviewContainerProps) {
  return <TaskOverview task={props.task} />;
}

export default TaskOverviewContainer;
