import React from "react";

import { useDrop } from "react-dnd";

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

  const [, drop] = useDrop({
    accept: "todo",
    drop: () => ({ name: "DoneArea" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return <BoardDoneArea drop={drop} tasks={tasks} />;
}

export default BoardDoneAreaContainer;
