import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./RecipeDetailPage.style.css";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { PiShareNetwork } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useRecipeDetailDataQuery } from "../../hooks/useRecipeDetailData";
import StepComponent from "./components/StepComponent";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { toggleBookmark } from "../../redux/reducer/bookmarkReducer";
import { useDispatch, useSelector } from "react-redux";

const RecipeDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("지금유알엘", location);
  }, [location]);

  const bookmarkedRecipes = useSelector((state) => state.bookmark.items);
  const dispatch = useDispatch();

  const { recipeName } = useParams();
  // const decodedRecipeName = decodeURIComponent(recipeName);
  const { data, isLoading, error } = useRecipeDetailDataQuery(recipeName);
  console.log(data);
  const preItem = `${data?.RCP_PARTS_DTLS}`;
  const arrayItem = preItem.split(",");

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const isBookmarked =
    bookmarkedRecipes.length > 0
      ? bookmarkedRecipes.some((item) => item.RCP_SEQ === data.RCP_SEQ)
      : false;
  console.log(bookmarkedRecipes);

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col>
          <div
            style={{
              backgroundImage: `url(${data?.ATT_FILE_NO_MK})`,
            }}
            className="detail-img"
          ></div>
        </Col>
        <Col className="title-area">
          <div>
            <div className="tag">
              #{data?.RCP_PAT2} #{data?.RCP_WAY2}
            </div>
            <div className="text-title">{data?.RCP_NM}</div>
            <div className="text-1 mt-5">
              <MdOutlineTipsAndUpdates color="#191919" size="24px" />
              Tip!
            </div>
            <div className="text-2 mt-2"> {data?.RCP_NA_TIP} </div>
          </div>
          <div className="button-two">
            <div
              className="button"
              onClick={() => dispatch(toggleBookmark(data))}
            >
              찜하기
              {isBookmarked ? (
                <RxBookmarkFilled
                  className="ms-1"
                  size="25px"
                  color="#616161"
                />
              ) : (
                <RxBookmark className="ms-1" size="25px" color="#616161" />
              )}
            </div>
            <div
              className="button ms-2"
              onClick={() =>
                handleCopyClipBoard(
                  `https://bejewelled-cuchufli-22921c.netlify.app${location.pathname}`
                )
              }
            >
              URL복사하기
              <PiShareNetwork className="ms-1" size="25px" color="#616161" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pre-item">
        <div className="item mt-5">
          <div className="pre-title mb-2">기본재료 </div>
          <hr />
          <div className="pre">
            {" "}
            {arrayItem.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
        <div className="item mt-5 ms-4">
          <div className="pre-title mb-2">영양성분</div>
          <hr />
          <div className="pre mb-1">
            <Row>
              <Col>
                <div>열량</div>
                <div>탄수화물</div>
                <div>단백질</div>
                <div>지방</div>
                <div>나트륨</div>
              </Col>
              <Col className="info-box">
                <div>{data?.INFO_ENG} kcal</div>
                <div>{data?.INFO_CAR} g</div>
                <div>{data?.INFO_PRO} g</div>
                <div>{data?.INFO_FAT} g</div>
                <div>{data?.INFO_NA} mg</div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <StepComponent />
    </Container>
  );
};

export default RecipeDetailPage;
