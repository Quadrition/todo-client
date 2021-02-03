import { SET_BOARDS, ADD_BOARD, Board, BoardActionTypes } from "./types";

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
