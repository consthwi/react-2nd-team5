import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./LoginPage.style.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    if (userId === "" || password === "") {
      alert("유저네임과 비밀번호를 모두 입력하세요.");
      return;
    }

    const userData = { userId, password };
    dispatch(login(userData));
    navigate("/");
  };

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Row xs={12} sm={8} md={6} lg={12}>
        <Col xs={12} sm={8} md={6} lg={12}>
          <h3 className="title">로그인</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUserId" className="mb-3">
              <Form.Control
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력해주세요"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-5">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Group>

            <Form.Group className="text-center">
              <div className="d-grid gap-2">

              <Button variant="danger" type="submit" size="lg">
                로그인
              </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
