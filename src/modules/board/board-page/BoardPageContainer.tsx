import React from "react";

import BoardPage from "./BoardPage";

import { useSelector } from "react-redux";

import { RootState } from "../../../store";
import { Redirect } from "react-router-dom";

function BoardPageContainer() {
  const isLogged = useSelector((state: RootState) => state.account !== null);
  const selected = useSelector(
    (state: RootState) => state.board.selected !== null
  );
  console.log(isLogged && selected);
  return isLogged && selected ? <BoardPage /> : <Redirect to="/" />;
}

export default BoardPageContainer;
