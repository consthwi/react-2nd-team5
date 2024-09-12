import React, { useEffect, useState } from 'react';


import { useRecipeDataQuery } from '../../../../hooks/useRecipeData';
import { Col, Container, Row } from 'react-bootstrap';
import'./RandomSlide.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faSpoon } from '@fortawesome/free-solid-svg-icons'
const RandomRecipeCard = () => {
    const [randomRecipe, setRandomRecipe] = useState("");
  const { data: choice } = useRecipeDataQuery();
console.log("choice",choice)

useEffect(() => {
  if (choice && choice.length > 0) {
    const selectRandomRecipe = () => {
      const randomIndex = Math.floor(Math.random() * choice.length);
      setRandomRecipe(choice[randomIndex]);
    };

    // 컴포넌트가 마운트될 때 초기 랜덤 레시피 설정
    selectRandomRecipe();

    // 5초마다 랜덤 
    const intervalId = setInterval(selectRandomRecipe, 9000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(intervalId);
  }
}, [choice]);

  return (
    <Container>
        <Row className="randomslide_h4">
            <h4 className="todays_menu slidertitle"><FontAwesomeIcon icon={faSpoon} /> 오늘은 이런 메뉴 어때요?</h4>
        </Row>
        <Row>
        <Col lg={6} sm={12} className="randomslide_img plusmargin">
        <img src={randomRecipe.ATT_FILE_NO_MAIN} className="random_img_style"/>
        </Col>
            <Col lg={6} sm={12} className="randomslide_col_2 plusmargin">
        <div className="randomslide_rcp_nm_style">
        <FontAwesomeIcon icon={faUtensils} />  {randomRecipe.RCP_NM}  <FontAwesomeIcon icon={faUtensils} />
    </div>
    <div>
    <span><FontAwesomeIcon icon={faSpoon} /> </span><span className="random_dtls random_rcp"> 재료 </span><span className="random_rcp"> {randomRecipe.RCP_PARTS_DTLS}</span> 
    </div>
    <div>
    <span><FontAwesomeIcon icon={faSpoon} /></span><span className="random_dtls random_rcp"> 꿀팁 </span><span  className="random_rcp">{randomRecipe.RCP_NA_TIP}</span> 
    </div>
    </Col>
        </Row>
    </Container>
  );
};

export default RandomRecipeCard;
