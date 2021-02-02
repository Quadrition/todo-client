export const LOGIN = "account/login";
export const LOGOUT = "account/logout";

export interface LoginDetails {
  email: string;
}

export interface AccountState {
  email: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginDetails;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AccountActionTypes = LoginAction | LogoutAction;
