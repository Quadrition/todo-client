import React from "react";

import BoardOverview from "./BoardOverview";
import { BoardOverviewProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewProps) {
  return <BoardOverview board={props.board} />;
}

export default BoardOverviewContainer;
