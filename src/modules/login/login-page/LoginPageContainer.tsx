import React from "react";

import LoginPage from "./LoginPage";

import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function LoginPageContainer() {
  const isLogged: boolean = useSelector(
    (state: RootState) => state.account !== null
  );

  return isLogged ? <Redirect to="/" /> : <LoginPage />;
}

export default LoginPageContainer;
