import {
  SET_BOARDS,
  BoardState,
  BoardActionTypes,
  ADD_BOARD,
  REMOVE_BOARD,
  EDIT_BOARD,
  SET_SELECTED_BOARD,
} from "./types";

const initialState: BoardState = { boards: [], selected: null };

export function boardReducer(
  state = initialState,
  action: BoardActionTypes
): BoardState {
  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        boards: action.payload.boards,
      };
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
      };
    case EDIT_BOARD:
      const boards = [...state.boards];
      boards[boards.indexOf(action.payload.board)].name = action.payload.value;
      return {
        ...state,
        boards: [...boards],
      };
    case REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board !== action.payload.board),
      };
    case SET_SELECTED_BOARD:
      return {
        ...state,
        selected: action.payload.board,
      };
    default:
      return state;
  }
}
