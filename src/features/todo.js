import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: initialState },
  reducers: {
    createTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    updateTodo: (state, action) => {
      state.value = action.payload;
    },
    deleteTodo: (state, action) => {
      state.value = state.filter(
        (task) => task !== action.payload.selectedTask
      );
    },
  },
});
export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
