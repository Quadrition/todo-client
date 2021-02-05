import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSelectedBoard } from "../../../store/board/actions";

import BoardOverview from "./BoardOverview";
import { BoardOverviewContainerProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewContainerProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  const tasks: number = Math.floor(Math.random() * 10);

  const handleBoardClick = () => {
    history.push("/board");
    dispatch(setSelectedBoard(props.board));
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
