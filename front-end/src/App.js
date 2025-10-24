// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import SignupPage from './features/auth/pages/SignupPage';
import TodoListPage from './features/todos/pages/TodoListPage';
import TodoDetailPage from './features/todos/pages/TodoDetailPage';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/login">로그인</Link>{' | '}
        <Link to="/signup">회원가입</Link>{' | '}
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todos/:id" element={<TodoDetailPage />} />
      </Routes>
    </>
  );
}
