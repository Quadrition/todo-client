import {
  SET_BOARDS,
  BoardState,
  BoardActionTypes,
  ADD_BOARD,
  REMOVE_BOARD,
} from "./types";

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
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
      };
    case REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board !== action.payload.board),
      };
    default:
      return state;
  }
}
