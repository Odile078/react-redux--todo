import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
export const taskSlice = createSlice({
  name: "task",
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
      state = state.map((task, index) => {
        const { taskId, newValue } = action.payload;
        console.log("taskId", taskId, "newValue:", newValue, action.payload);
        if (task.id === taskId) {
          const newTask = { ...task, value: newValue, isEditing: false };
          return newTask;
        } else return task;
      });
      return state;
    },
    deleteTask: (state, action) => {
      state = state.filter((task) => task.id != action.payload.id);
      return state;
    },
    markTaskDone: (state, action) => {
      state = state.map((task, index) => {
        if (task.id === action.payload) {
          const newTask = { ...task, checked: !task.checked };
          return newTask;
        } else return task;
      });
      return state;
    },
    enableEditing: (state, action) => {
      state = state.map((task, index) => {
        if (task.id === action.payload) {
          const newTask = { ...task, isEditing: !task.isEditing };
          return newTask;
        } else return task;
      });
      return state;
    },
  },
});
export const {
  createTask,
  markTaskDone,
  updateTask,
  deleteTask,
  enableEditing,
} = taskSlice.actions;
export default taskSlice.reducer;
