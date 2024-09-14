import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useBookmark } from "../../../hooks/useBookmark";


const Wishlist = ({ isGuest }) => {
  const { bookmarkedRecipes, toggleBookmark } = useBookmark();

  return (
    <Container className="wish-list-wrap">
      <Row>
        <Col className="wish-list-items" style={{ textAlign: 'center' }}>
          {!isGuest ? (
            <>
              <h1>찜목록</h1>
              {bookmarkedRecipes && bookmarkedRecipes.length > 0 ? (
                <div>
                  {bookmarkedRecipes.map((recipe) => (
                    <Row
                      style={{ backgroundColor: "#fff", marginBottom: "1rem" }}
                      key={recipe.RCP_SEQ}
                    >
                      <Col>
                        <Image className="card-img" src={recipe.ATT_FILE_NO_MAIN} rounded />
                      </Col>
                      <Col>
                        <div className="tag-text">#{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}</div>
                        <div className="title">{recipe.RCP_NM}</div>
                      </Col>
                      <Col>
                        <Button
                          variant="outline-secondary"
                          onClick={() => toggleBookmark(recipe)}
                        >
                          삭제
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>
              ) : (
                <p>찜한 항목이 없습니다</p>
              )}
            </>
          ) : (
            <>
              <h1>게스트의 찜목록</h1>
              {bookmarkedRecipes && bookmarkedRecipes.length > 0 ? (
                <div>
                  {bookmarkedRecipes.map((recipe) => (
                    <Row
                      style={{ backgroundColor: "#fff", marginBottom: "1rem" }}
                      key={recipe.RCP_SEQ}
                    >
                      <Col>
                        <Image className="card-img" src={recipe.ATT_FILE_NO_MAIN} rounded />
                      </Col>
                      <Col>
                        <div className="tag-text">#{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}</div>
                        <div className="title">{recipe.RCP_NM}</div>
                      </Col>
                      <Col>
                        <Button
                          variant="outline-secondary"
                          onClick={() => toggleBookmark(recipe)}
                        >
                          삭제
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>
              ) : (
                <p>찜한 항목이 없습니다</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Wishlist;
