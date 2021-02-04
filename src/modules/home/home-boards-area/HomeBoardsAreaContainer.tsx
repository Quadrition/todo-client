import React from "react";

import BoardsArea from "./HomeBoardsArea";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function HomeBoardsAreaContainer() {
  const boards = useSelector((state: RootState) => state.board.boards);

  return <BoardsArea boards={boards} />;
}

export default HomeBoardsAreaContainer;
