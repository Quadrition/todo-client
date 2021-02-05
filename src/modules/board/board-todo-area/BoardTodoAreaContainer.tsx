import React from "react";

import { useDrop } from "react-dnd";

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

  const [, drop] = useDrop({
    accept: "done",
    drop: () => ({ name: "TodoArea" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return <BoardTodoArea drop={drop} tasks={tasks} />;
}

export default BoardTodoAreaContainer;
