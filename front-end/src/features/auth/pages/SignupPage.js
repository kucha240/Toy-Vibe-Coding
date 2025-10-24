import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    // 실제 회원가입 API 대신 단순 라우팅
    alert('회원가입 완료(데모)');
    navigate('/login');
  }

  return (
    <div style={{ maxWidth: 420, margin: '48px auto' }}>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, marginTop: 12 }}>
        <input placeholder="아이디(이메일)" value={id} onChange={(e) => setId(e.target.value)} />
        <input placeholder="비밀번호" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}