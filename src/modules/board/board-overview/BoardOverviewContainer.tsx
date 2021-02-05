import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../store";

import { setSelectedBoard } from "../../../store/board/actions";

import BoardOverview from "./BoardOverview";
import { BoardOverviewContainerProps } from "./types";

function BoardOverviewContainer(props: BoardOverviewContainerProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  const tasks = useSelector((state: RootState) => {
    const tasks = state.task.tasks.filter((task) => task.board === props.board);

    if (tasks.length === 0) {
      return { count: 0, done: false };
    }
    const doneCount = tasks.filter((task) => task.type === "done").length;
    const todoCount = tasks.filter((task) => task.type === "todo").length;

    if (todoCount === 0) {
      return { count: doneCount, done: true };
    } else {
      return { count: todoCount, done: false };
    }
  });

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
