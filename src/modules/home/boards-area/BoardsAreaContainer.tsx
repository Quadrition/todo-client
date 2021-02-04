import React from "react";

import BoardsArea from "./BoardsArea";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function BoardsAreaContainer() {
  const boards = useSelector((state: RootState) => state.board.boards);

  return <BoardsArea boards={boards} />;
}

export default BoardsAreaContainer;
