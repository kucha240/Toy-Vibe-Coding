import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TodoDetailPage() {
  const { id } = useParams();
  const todo = useSelector((s) => s.todos.items.find((t) => t.id === id));

  if (!todo) {
    return (
      <div style={{ maxWidth: 640, margin: '32px auto' }}>
        <p>존재하지 않는 투두입니다.</p>
        <Link to="/todos">← 목록으로</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: '32px auto' }}>
      <h1>투두 상세</h1>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>제목:</strong> {todo.title}</p>
      <p><strong>상태:</strong> {todo.done ? '완료' : '미완료'}</p>
      <Link to="/todos">← 목록으로</Link>
    </div>
  );
}