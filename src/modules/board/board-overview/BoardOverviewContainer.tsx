import React from "react";

import BoardOverview from "./BoardOverview";
import { BoardOverviewContainerProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewContainerProps) {
  const tasks: number = Math.floor(Math.random() * 10);

  return <BoardOverview board={props.board} tasks={tasks} />;
}

export default BoardOverviewContainer;
