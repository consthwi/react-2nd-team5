import React, { useEffect, useState } from 'react';


import { useRecipeDataQuery } from '../../../../hooks/useRecipeData';
import { Col, Container, Row } from 'react-bootstrap';
import'./RandomSlide.style.css'

const RandomRecipeCard = () => {
    const [randomRecipe, setRandomRecipe] = useState("");
  const { data: choice } = useRecipeDataQuery();
console.log("choice",choice)

useEffect(() => {
    if (choice && choice.length > 0) {
      // 랜덤 인덱스 생성
      const randomIndex = Math.floor(Math.random() * choice.length);
      // 랜덤 데이터 선택
      setRandomRecipe(choice[randomIndex]);
    }
  }, [choice]);

  return (
    <Container>
        <Row>
            <h4 className="todays_menu">오늘은 이 메뉴 어떠세요?</h4>
        </Row>
        <Row>
        <Col lg={6}>
        <img src={randomRecipe.ATT_FILE_NO_MAIN}/>
        </Col>
            <Col lg={6}>
        <div>
     {randomRecipe.RCP_NM}
    </div>
    <div>
 {randomRecipe.RCP_PARTS_DTLS}
    </div>
    <div>
{randomRecipe.RCP_NA_TIP}
    </div>
    </Col>
        </Row>
    </Container>
  );
};

export default RandomRecipeCard;
