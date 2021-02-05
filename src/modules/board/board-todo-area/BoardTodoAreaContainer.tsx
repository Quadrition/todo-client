import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import BoardTodoArea from "./BoardTodoArea";
import { BoardTodoAreaContainerProps } from "./types";

function BoardTodoAreaContainer(props: BoardTodoAreaContainerProps) {
  const tasks = useSelector((state: RootState) =>
    state.task.tasks.filter(
      (task) => task.board === props.selectedBoard && task.type === "todo"
    )
  );

  return <BoardTodoArea tasks={tasks} />;
}

export default BoardTodoAreaContainer;
