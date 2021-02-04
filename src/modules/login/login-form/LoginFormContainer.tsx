import React from "react";

import LoginForm from "./LoginForm";
import { LoginCredentials } from "./types";

import { useDispatch } from "react-redux";
import { login } from "../../../store/account/actions";
import { LoginDetails } from "../../../store/account/types";

function LoginFormContainer() {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = (credentials: LoginCredentials) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(login(credentials as LoginDetails));
      setLoading(false);
    }, 1000);
  };

  return <LoginForm loading={loading} onLogin={handleLogin} />;
}

export default LoginFormContainer;
