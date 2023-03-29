import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    createTodo: (state, action) => {
      state.push({ id: nanoid(), checked: false, value: action.payload });
    },
    markTodoDone: (state, action) => {
      state = state.map((task, index) => {
        if (task.id === action.payload) {
          const newTask = { ...task, checked: !task.checked };
          task = newTask;
          return newTask;
        } else return task;
      });
      return state;
    },
    updateTodo: (state, action) => {
      state = action.payload;
    },
    deleteTodo: (state, action) => {
      state = state.filter((task) => task.id != action.payload.id);
      return state;
    },
  },
});
export const { createTodo, markTodoDone, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
