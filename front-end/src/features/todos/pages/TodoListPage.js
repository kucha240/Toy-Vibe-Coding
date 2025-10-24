// --- src/features/todos/TodoListPage.jsx ---
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../slice';
import TodoItemCard from '../components/TodoItemCard'

export default function TodoListPage() {
  const items = useSelector((s) => s.todos.items);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  function onAdd(e) {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title.trim()));
    setTitle('');
  }

  return (
    <div style={{ maxWidth: 640, margin: '32px auto' }}>
      <h1>투두 목록</h1>
      <form onSubmit={onAdd} style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일 입력"
          style={{ flex: 1 }}
        />
        <button type="submit">추가</button>
      </form>

      <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: 'none' }}>
        {items.map((t) => (
          <TodoItemCard key={t.id} todo={t} onToggle={(id) => dispatch(toggleTodo(id))} />
        ))}
      </ul>
    </div>
  );
}
