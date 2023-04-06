import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import tasksReducer from "./features/Tasks";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: { tasks: tasksReducer },
  middleware,
});
export default store;
