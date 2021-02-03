export const SET_BOARDS = "board/setBoards";
export const ADD_BOARD = "board/addBoard";

export interface Board {
  name: string;
}

export interface BoardState {
  boards: Board[];
}

interface SetBoardsAction {
  type: typeof SET_BOARDS;
  payload: { boards: Board[] };
}

interface AddBoardAction {
  type: typeof ADD_BOARD;
  payload: { board: Board };
}

export type BoardActionTypes = SetBoardsAction | AddBoardAction;
