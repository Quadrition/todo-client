import {
  SET_BOARDS,
  ADD_BOARD,
  Board,
  BoardActionTypes,
  REMOVE_BOARD,
} from "./types";

export function setBoards(boards: Board[]): BoardActionTypes {
  return {
    type: SET_BOARDS,
    payload: { boards },
  };
}

export function addBoard(board: Board): BoardActionTypes {
  return {
    type: ADD_BOARD,
    payload: { board },
  };
}

export function removeBoard(board: Board): BoardActionTypes {
  return {
    type: REMOVE_BOARD,
    payload: { board },
  };
}
