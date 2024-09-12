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
      // 랜덤 인덱스 생성
      const randomIndex = Math.floor(Math.random() * choice.length);
      // 랜덤 데이터 선택
      setRandomRecipe(choice[randomIndex]);
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
