import React from "react";

import DeleteBoardButton from "./DeleteBoardButton";
import { DeleteBoardButtonContainerProps } from "./types";

import { useDispatch } from "react-redux";
import { removeBoard } from "../../../store/board/actions";

import { message } from "antd";

function DeleteBoardButtonContainer(props: DeleteBoardButtonContainerProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBoard(props.board));
    message.success("Successfully deleted");
  };

  return <DeleteBoardButton onRemove={handleRemove} />;
}

export default DeleteBoardButtonContainer;
