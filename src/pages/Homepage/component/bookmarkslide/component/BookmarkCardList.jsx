import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BookmarkCardList.style.css";
const BookmarkCardList = (guestBookmarks, key) => {
  console.log("무지", guestBookmarks);
  const navigate = useNavigate();
  const godetail = () => {
    navigate(`/recipes/${guestBookmarks?.guestBookmarks?.RCP_NM}`);
  };

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="slidercard_url">
            <Card.Img
              variant="top"
              src={guestBookmarks?.guestBookmarks?.ATT_FILE_NO_MAIN}
              className="card_img_bookmarkcardlist"
              onClick={godetail}
            />
            <Card.Body>
              <div className="card-body-content">
                <div className="slidercard_rcp_nm" onClick={godetail}>
                  <div className="recipeitem">
                    {guestBookmarks?.guestBookmarks?.RCP_WAY2}
                  </div>
                  <div>{guestBookmarks?.guestBookmarks?.RCP_NM}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookmarkCardList;
