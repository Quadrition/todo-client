import React from "react";

import BoardPage from "./BoardPage";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import { Redirect } from "react-router-dom";

function BoardPageContainer() {
  const isLogged = useSelector((state: RootState) => state.account !== null);
  const selected = useSelector((state: RootState) => state.board.selected);

  return isLogged && selected !== null ? (
    <BoardPage selectedBoard={selected} />
  ) : (
    <Redirect to="/" />
  );
}

export default BoardPageContainer;
