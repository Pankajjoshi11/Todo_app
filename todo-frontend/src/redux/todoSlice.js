import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo._id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    completeTodo: (state, action) => {
      const index = state.findIndex(todo => todo._id === action.payload);
      if (index !== -1) {
        state[index].completed = true;
      }
    },
  },
});

export const { setTodos, addTodo, removeTodo, updateTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
