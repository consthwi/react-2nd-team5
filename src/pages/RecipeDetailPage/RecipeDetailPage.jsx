import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RecipeDetailPage.style.css";
import { RxBookmark } from "react-icons/rx";
import { PiShareNetwork } from "react-icons/pi";

import { useParams } from "react-router-dom";
import { useRecipeDetailDataQuery } from "../../hooks/useRecipeDetailData";

const RecipeDetailPage = () => {
  const { recipeName } = useParams();
  const { data } = useRecipeDetailDataQuery(recipeName);
  console.log(data);

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col>
          <div
            style={{
              backgroundImage:
                "url(https://t1.daumcdn.net/news/202105/25/dailylife/20210525044309969jdhs.jpg)",
            }}
            className="detail-img"
          ></div>
        </Col>

        <Col className="title-area">
          <div>
            <div className="tag">#메인요리</div>
            <div className="text-1">
              겹겹이 쌓인 신선한 야채와 따끈한 국물까지 완벽!
            </div>
            <div className="text-title">버섯 샤브샤브 밀푀유나배</div>
            <div className="text-2 mt-3">
              추운겨울엔 이만한게 없죠! <br />
              정말 맛있는 밀푀유나배 만들기도 너무 쉽고 따끈한 국물까지 마시면
              정말 든든한 한끼랍니다! 집들이 메인요리로도 손색이없어요{" "}
            </div>
          </div>

          <div className="button-two">
            <div className="button">
              찜하기
              <RxBookmark className="ms-1" size="25px" color="#616161" />
            </div>
            <div className="button ms-2">
              공유하기
              <PiShareNetwork className="ms-1" size="25px" color="#616161" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pre-item">
        <div className="item mt-5">
          <div className="pre-title mb-2">기본재료</div>
          <div className="pre mb-1"> 고구마</div>
        </div>

        <div className="item mt-5">
          <div className="pre-title mb-2">양념재료</div>
          <div className="pre mb-1"> 고추장</div>
        </div>

        <div className="item mt-5">
          <div className="pre-title mb-2">기본재료</div>
          <div className="pre mb-1"> 고구마</div>
        </div>
        <hr className="mt-5" />
      </Row>
    </Container>

  
  )
}




export default RecipeDetailPage;
