import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import BoardPage from "./pages/board/BoardPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

import { Provider } from "react-redux";

import configureStore from "./store";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
