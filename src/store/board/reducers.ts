import { SET_BOARDS, BoardState, BoardActionTypes } from "./types";

const initialState: BoardState = { boards: [] };

export function boardReducer(
  state = initialState,
  action: BoardActionTypes
): BoardState {
  switch (action.type) {
    case SET_BOARDS:
      return {
        boards: action.payload.boards,
      };
    default:
      return state;
  }
}
