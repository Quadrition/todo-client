import React from "react";

import NavigationBarActions from "./NavigationBarActions";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/account/actions";

function NavigationBarActionsContainer() {
  const dispatch = useDispatch();

  const isLogged: boolean = useSelector(
    (state: RootState) => state.account !== null
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return <NavigationBarActions isLogged={isLogged} onLogout={handleLogout} />;
}

export default NavigationBarActionsContainer;
