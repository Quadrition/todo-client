import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import BoardPage from "./pages/board/BoardPage";
import HomePage from "./pages/home/HomePage";
import LoginPageContainer from "./pages/login/LoginPageContainer";

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
