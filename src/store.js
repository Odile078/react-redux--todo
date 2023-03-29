import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "./features/todo";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: { todo: todoReducer },
  middleware,
});
export default store;
