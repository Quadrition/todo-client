import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPageContainer from "./modules/login/login-page/LoginPageContainer";
import HomePage from "./modules/home/home-page/HomePage";
import BoardPageContainer from "./modules/board/board-page/BoardPageContainer";

import { Provider } from "react-redux";

import configureStore from "./store";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/board">
            <BoardPageContainer />
          </Route>
          <Route path="/login">
            <LoginPageContainer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
