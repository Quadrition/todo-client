import { combineReducers, createStore } from "redux";

import { accountReducer } from "./account/reducers";
import { boardReducer } from "./board/reducers";

const rootReducer = combineReducers({
  account: accountReducer,
  board: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
