import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("유저네임과 비밀번호를 모두 입력하세요.");
      return;
    }

    const userData = { username, password };
    dispatch(login(userData));
    navigate("/");
  };

  return (
    <div>
      <h1>로그인</h1>

      <div>
        <label>유저이름:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="유저네임을 입력하세요"
        />
      </div>

      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginPage;
