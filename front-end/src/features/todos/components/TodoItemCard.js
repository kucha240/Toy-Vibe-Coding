// --- src/features/todos/TodoItemCard.jsx ---
import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoItemCard({ todo, onToggle }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
        padding: '8px 10px',
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        background: '#fff',
      }}
    >
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      <Link to={`/todos/${todo.id}`} style={{ flex: 1, textDecoration: 'none', color: '#111827' }}>
        {todo.title}
      </Link>
      {todo.done && <span style={{ color: '#16a34a', fontSize: 12 }}>(완료)</span>}
    </li>
  );
}