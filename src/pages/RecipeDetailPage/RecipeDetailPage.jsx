
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RecipeDetailPage.style.css";
import { RxBookmark } from "react-icons/rx";
import { PiShareNetwork } from "react-icons/pi";

import { useParams } from "react-router-dom";
import { useRecipeDetailDataQuery } from "../../hooks/useRecipeDetailData";
import { TiPin } from "react-icons/ti";

const RecipeDetailPage = () => {
  const { recipeName } = useParams();
  // const decodedRecipeName = decodeURIComponent(recipeName);
  const { data } = useRecipeDetailDataQuery(recipeName);
  console.log(data);

  return (
    <Container className='mt-5'>
      <Row className='mb-5'>
        <Col>
          <div style={{
            backgroundImage: `url(${data?.ATT_FILE_NO_MK})` 
          }} className='detail-img'></div>
        </Col>
        <Col className='title-area'>
          <div>
            <div className='tag'>#{data?.RCP_PAT2} #{data?.RCP_WAY2}</div>
            <div className='text-1'>겹겹이 쌓인 신선한 야채와 따끈한 국물까지 완벽!</div>
            <div className='text-title'>{data?.RCP_NM}</div>
            <div className='text-2 mt-3'><TiPin color="#ed0c0c" size="26px" /> {data?.RCP_NA_TIP} </div>
          </div>
          <div className='button-two'>
            <div className='button'>찜하기<RxBookmark className="ms-1" size="25px" color="#616161" /></div>
            <div className='button ms-2'>공유하기<PiShareNetwork className="ms-1" size="25px" color="#616161" /></div>
          </div>
        </Col>
      </Row>
      <Row className='pre-item'>
        <div className='item mt-5'>
          <div className='pre-title mb-2'>기본재료 </div>
        </div>
        <div className='item mt-5 ms-4'>
          <div className='pre-title mb-2'>영양소</div>
          <div className='pre mb-1'> 
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
        <hr className='mt-5' />
      </Row>
      <Row className='mb-5 mt-5'>
        <Col>
          <div style={{
            backgroundImage: "url(https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2023/04/11/20230411000085_0.jpg)" 
          }} className='recipe-img'></div>
        </Col>
        <Col>
          <div className='step-text'>STEP01</div>
        </Col>
      </Row>
    </Container>
<<<<<<< HEAD

  
  )
}



=======
  )
}
>>>>>>> 0901b7be2a47811358275dd75f022e4c66ca5780

export default RecipeDetailPage;