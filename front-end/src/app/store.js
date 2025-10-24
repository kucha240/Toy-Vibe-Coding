import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice.js';
import todosReducer from '../features/todos/slice.js';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

// 선택자(편의용)
export const selectAuth = (s) => s.auth;
export const selectTodos = (s) => s.todos;