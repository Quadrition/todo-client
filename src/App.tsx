import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import BoardPage from "./pages/board/BoardPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/board">
          <BoardPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
