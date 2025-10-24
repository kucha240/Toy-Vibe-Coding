import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../slice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    // 여기서는 단순히 스토어에 사용자 정보 저장만 합니다.
    dispatch(loginSuccess({ id: 1, email: id }));
    navigate('/todos');
  }

  return (
    <div style={{ maxWidth: 420, margin: '48px auto' }}>
      <h1>로그인 화면</h1>
      <p style={{ color: '#6b7280' }}>이 페이지는 로그인 화면입니다</p>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, marginTop: 12 }}>
        <input placeholder="아이디(이메일)" value={id} onChange={(e) => setId(e.target.value)} />
        <input placeholder="비밀번호" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
      {user && <p style={{ marginTop: 8 }}>현재 로그인: {user.email}</p>}
    </div>
  );
}