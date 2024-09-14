import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Wishlist = ({ isGuest }) => {
  const user = useSelector((state) => state.auth.user);
  const guestBookmarks = useSelector((state) => state.bookmark.guestBookmarks);
  const userBookmarks = useSelector((state) =>
    state.bookmark.userBookmarks[user?.id]
  );

  return (
    <Container>
      <Row>
        <Col>
          {/* 로그인한 유저일 경우 */}
          {!isGuest && user ? (
            <>
              <h1>{`${user.userId}님의 찜목록`}</h1>
              {userBookmarks && userBookmarks.length > 0 ? (
                <ul>
                  {userBookmarks.map((recipe) => (
                    <li key={recipe.RCP_SEQ}>{recipe.RCP_NM}</li>
                  ))}
                </ul>
              ) : (
                <p>찜한 항목이 없습니다.</p>
              )}
            </>
          ) : (
            /* 게스트일 경우 */
            <>
              <h1>게스트의 찜목록</h1>
              {guestBookmarks && guestBookmarks.length > 0 ? (
                <ul>
                  {guestBookmarks.map((recipe) => (
                    <li key={recipe.RCP_SEQ}>{recipe.RCP_NM}</li>
                  ))}
                </ul>
              ) : (
                <p>찜한 항목이 없습니다.</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Wishlist;
