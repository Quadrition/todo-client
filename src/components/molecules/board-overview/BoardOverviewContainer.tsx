import React from "react";

import BoardOverview from "./BoardOverview";
import { BoardOverviewContainerProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewContainerProps) {
  return <BoardOverview board={props.board} />;
}

export default BoardOverviewContainer;
