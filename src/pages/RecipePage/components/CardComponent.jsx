import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import "./CardComponent.style.css";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ recipe, handleBookMark }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/recipes/${recipe.RCP_NM}`);
  };
  return (
    <Col md={4} key={recipe.RCP_SEQ}>
      <Card className="card-container">
        <Card.Img
          className="card-img"
          variant="top"
          src={recipe.ATT_FILE_NO_MAIN}
          onClick={handleCardClick}
        />
        <Card.Body>
          <Row>
            <Col xs={9} sm={9} md={9}>
              <Card.Text>{recipe.RCP_PAT2}</Card.Text>
              <Card.Title onClick={handleCardClick}>{recipe.RCP_NM}</Card.Title>
              <Card.Text className="text-ellipsis" onClick={handleCardClick}>
                {recipe.RCP_NA_TIP}
              </Card.Text>
            </Col>
            <Col xs={3} sm={3} md={3} className="text-center">
              {recipe.isBookmarked ? (
                <RxBookmarkFilled
                  className="bookmark-icon"
                  onClick={() => handleBookMark(recipe.RCP_SEQ)}
                />
              ) : (
                <RxBookmark
                  className="bookmark-icon"
                  onClick={() => handleBookMark(recipe.RCP_SEQ)}
                />
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
