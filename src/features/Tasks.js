import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    createTask: (state, action) => {
      state.push({
        id: nanoid(),
        value: action.payload,
        checked: false,
        isEditing: false,
      });
    },

    updateTask: (state, action) => {
      return state.map((task) => {
        const { taskId, newValue } = action.payload;
        if (task.id === taskId) {
          const newTask = { ...task, value: newValue, isEditing: false };
          return newTask;
        } else return task;
      });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id != action.payload.id);
    },
    markTaskDone: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          const newTask = { ...task, checked: !task.checked };
          return newTask;
        } else return task;
      });
    },
    enableEditing: (state, action) => {
      return (state = state.map((task) => {
        if (task.id === action.payload) {
          const newTask = { ...task, isEditing: !task.isEditing };
          return newTask;
        } else return task;
      }));
    },
  },
});
export const {
  createTask,
  markTaskDone,
  updateTask,
  deleteTask,
  enableEditing,
} = tasksSlice.actions;
export default tasksSlice.reducer;
