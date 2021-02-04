import React from "react";

import BoardPageTitle from "./BoardPageTitle";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

function BoardPageTitleContainer() {
  const boardName: string = useSelector(
    (state: RootState) => state.board.selected?.name as string
  );

  return <BoardPageTitle name={boardName} />;
}

export default BoardPageTitleContainer;
