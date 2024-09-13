import { useSelector } from "react-redux";

const UserPage = () => {
  // Redux 상태에서 user 정보 가져오기
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>유저 대시보드</h1>
      {user ? (
        <div>
          <p>유저네임: {user.username}</p>
          <p>비밀번호: {user.password}</p> {/* 보통 비밀번호는 노출하지 않음 */}
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default UserPage;
