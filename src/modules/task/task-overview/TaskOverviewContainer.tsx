import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

import { useDispatch } from "react-redux";
import { switchType } from "../../../store/task/actions";
import { Task } from "../../../store/task/types";

import TaskOverview from "./TaskOverview";
import { TaskOverviewContainerProps } from "./types";

function TaskOverviewContainer(props: TaskOverviewContainerProps) {
  const dispatch = useDispatch();

  const [, drag] = useDrag({
    item: props.task,
    end: (item: Task | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(switchType(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return <TaskOverview drag={drag} task={props.task} />;
}

export default TaskOverviewContainer;
