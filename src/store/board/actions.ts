import { SET_BOARDS, Board, BoardActionTypes } from "./types";

export function setBoards(boards: Board[]): BoardActionTypes {
  return {
    type: SET_BOARDS,
    payload: boards,
  };
}
