import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { localStorageMiddleware } from "./middleware";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(localStorageMiddleware)
);

export default store;
