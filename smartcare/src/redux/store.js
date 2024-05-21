import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { sessionStorageMiddleware } from "./middleware";

const persistedState = sessionStorage.getItem("reduxState")
  ? JSON.parse(sessionStorage.getItem("reduxState"))
  : {};
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sessionStorageMiddleware)
);

export default store;
