import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import "./CardComponent.style.css";
import { useNavigate } from "react-router-dom";
const CardComponent = ({ recipe, index, handleBookMark }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/recipes/${recipe.RCP_SEQ}`);
  };
  return (
    <Col md={4} key={index}>
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
                  onClick={() => handleBookMark(index)}
                />
              ) : (
                <RxBookmark
                  className="bookmark-icon"
                  onClick={() => handleBookMark(index)}
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
