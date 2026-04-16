import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalTask } from "@/types/task";

interface TaskState {
  localTasks: LocalTask[];
}

const initialState: TaskState = {
  localTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<LocalTask>) => {
      state.localTasks.unshift(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.localTasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;