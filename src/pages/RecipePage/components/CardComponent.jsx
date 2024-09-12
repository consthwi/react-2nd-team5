import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";
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
              <div className="tag-text">
                #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
              </div>
              <div className="title" onClick={handleCardClick}>
                {recipe.RCP_NM}
              </div>
              <div className="text-ellipsis" onClick={handleCardClick}>
                {recipe.RCP_NA_TIP}
              </div>
            </Col>
            <Col xs={3} sm={3} md={3} className="bookmark">
              {recipe.isBookmarked ? (
                <PiBookmarkSimpleFill
                  className="bookmark-icon"
                  size="3rem"
                  onClick={() => handleBookMark(recipe.RCP_SEQ)}
                />
              ) : (
                <PiBookmarkSimpleThin
                  className="bookmark-icon"
                  size="3rem"
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
