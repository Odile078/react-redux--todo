import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import taskReducer from "./features/Task";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: { task: taskReducer },
  middleware,
});
export default store;
