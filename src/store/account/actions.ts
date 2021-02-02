import { LOGIN, LOGOUT, LoginDetails, AccountActionTypes } from "./types";

export function login(details: LoginDetails): AccountActionTypes {
  return {
    type: LOGIN,
    payload: details,
  };
}

export function logout(): AccountActionTypes {
  return {
    type: LOGOUT,
  };
}
