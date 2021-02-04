import React from "react";
import { useHistory } from "react-router-dom";

import BoardOverview from "./BoardOverview";
import { BoardOverviewContainerProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewContainerProps) {
  const history = useHistory();

  const tasks: number = Math.floor(Math.random() * 10);

  const handleBoardClick = () => {
    history.push("/board");
  };

  return (
    <BoardOverview
      board={props.board}
      onBoardClick={handleBoardClick}
      tasks={tasks}
    />
  );
}

export default BoardOverviewContainer;
