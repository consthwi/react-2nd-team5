import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import "./CardComponent.style.css";
const CardComponent = ({ recipe, index, handleBookMark }) => {
  return (
    <Col md={4} key={index}>
      <Card>
        <Card.Img variant="top" src={recipe.ATT_FILE_NO_MAIN} />
        <Card.Body>
          <Row>
            <Col xs={9} md={9}>
              <Card.Text
                className="text-ellipsis"
                style={{ fontSize: "0.8rem" }}
              >
                {recipe.RCP_PAT2}
              </Card.Text>
              <Card.Title>{recipe.RCP_NM}</Card.Title>
              <Card.Text className="text-ellipsis">
                {recipe.RCP_NA_TIP}
              </Card.Text>
            </Col>
            <Col xs={3} md={3} className="text-center">
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
