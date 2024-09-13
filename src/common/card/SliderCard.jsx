import React from "react";
import "./SliderCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../../redux/reducer/bookmarkReducer";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";

const SliderCard = ({ recipeitem }) => {
  const dispatch = useDispatch();
  const bookmarkedRecipes = useSelector((state) => state.bookmark.items);
  const navigate = useNavigate();
  const isBookmarkded =
    bookmarkedRecipes.length > 0
      ? bookmarkedRecipes.some((item) => item.RCP_SEQ === recipeitem.RCP_SEQ)
      : false;

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM}`);
  };

  // 토글
  // const handleToggleBookmark = (event) => {
  //     event.stopPropagation();
  //     setBookmarkStates((prevStates) => {
  //         const newState = { ...prevStates };
  //         newState[key] = !newState[key];
  //         return newState;
  //     });
  // }

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card className="slidercard_url">
          <Card.Img
            variant="top"
            src={recipeitem?.ATT_FILE_NO_MAIN}
            className="card_img"
            onClick={godetail}
          />
          <Card.Body>
            <div className="card-body-content">
              <div className="slidercard_rcp_nm" onClick={godetail}>
                <div className="recipeitem">{recipeitem?.RCP_WAY2}</div>
                <div>{recipeitem?.RCP_NM}</div>
              </div>
              <div>
                {isBookmarkded ? (
                  <RxBookmarkFilled
                    className="bookmark-icon-inSlidercard"
                    size="2rem"
                    onClick={() => dispatch(toggleBookmark(recipeitem))}
                  />
                ) : (
                  <RxBookmark
                    className="bookmark-icon-inSlidercard"
                    size="2rem"
                    onClick={() => dispatch(toggleBookmark(recipeitem))}
                  />
                )}
                {/* <div className="recipeitem">{recipeitem?.RCP_WAY2}</div> */}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SliderCard;
