import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import BoardDoneArea from "./BoardDoneArea";
import { BoardDoneAreaContainerProps } from "./types";

function BoardDoneAreaContainer(props: BoardDoneAreaContainerProps) {
  const tasks = useSelector((state: RootState) =>
    state.task.tasks.filter(
      (task) => task.board === props.selectedBoard && task.type === "done"
    )
  );

  return <BoardDoneArea tasks={tasks} />;
}

export default BoardDoneAreaContainer;
