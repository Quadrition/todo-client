import React from "react";

import HomeTemplate from "./HomeTemplate";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function HomeTemplateContainer() {
  const isLogged: boolean = useSelector(
    (state: RootState) => state.account !== null
  );

  return <HomeTemplate isLogged={isLogged} />;
}

export default HomeTemplateContainer;
