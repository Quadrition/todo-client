import { AccountState, AccountActionTypes, LOGIN, LOGOUT } from "./types";

const initialState: AccountState | null = null;

export function accountReducer(
  state = initialState,
  action: AccountActionTypes
): AccountState | null {
  switch (action.type) {
    case LOGIN:
      return {
        email: action.payload.email,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
