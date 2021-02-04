export const SET_BOARDS = "board/setBoards";
export const ADD_BOARD = "board/addBoard";
export const EDIT_BOARD = "board/editBoard";
export const REMOVE_BOARD = "board/removeBoard";
export const SET_SELECTED_BOARD = "board/setSelectedBoard";

export interface Board {
  name: string;
}

export interface BoardState {
  boards: Board[];
  selected: Board | null;
}

interface SetBoardsAction {
  type: typeof SET_BOARDS;
  payload: { boards: Board[] };
}

interface AddBoardAction {
  type: typeof ADD_BOARD;
  payload: { board: Board };
}

interface EditBoardAction {
  type: typeof EDIT_BOARD;
  payload: { board: Board; value: string };
}

interface RemoveBoardAction {
  type: typeof REMOVE_BOARD;
  payload: { board: Board };
}

interface SetSelectedBoardAction {
  type: typeof SET_SELECTED_BOARD;
  payload: { board: Board };
}

export type BoardActionTypes =
  | SetBoardsAction
  | AddBoardAction
  | EditBoardAction
  | RemoveBoardAction
  | SetSelectedBoardAction;
