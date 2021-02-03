export const SET_BOARDS = "board/setBoards";

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

export type BoardActionTypes = SetBoardsAction;
