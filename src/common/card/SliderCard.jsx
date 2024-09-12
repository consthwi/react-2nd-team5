import React from 'react'
import "./SliderCard.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
const SliderCard = ({recipeitem,key}) => {
    const navigate = useNavigate();
    const godetail=()=>{
        // navigate(`/recipes/${recipeitem?.RCP_NM}`)
        navigate('/recipes')
    }
  return (
    // <div style={{backgroundImage:"url("+`${recipeitem?.ATT_FILE_NO_MAIN}`+")"}} className="slidercard_url" onClick={godetail}>
    //     <div className="overlay">
    //     <div className="slidercard_rcp_nm"><FontAwesomeIcon icon={faUtensils} /> {recipeitem?.RCP_NM}</div>
    //     <div>{recipeitem?.RCP_SEQ}</div>
    //     <div>{recipeitem?.RCP_WAY2}</div>
    //     </div>
    // </div>
    <Row xs={1} md={2} className="g-4">
    
      <Col>
        <Card onClick={godetail} className="slidercard_url">
        <Card.Img variant="top" src={recipeitem?.ATT_FILE_NO_MAIN} className="card_img"/>
          <Card.Body className="card_text">
            <Card.Title className="slidercard_rcp_nm"><FontAwesomeIcon icon={faUtensils} /> {recipeitem?.RCP_NM}</Card.Title>
            <Card.Text >
            {/* <div className="recipeitem">{recipeitem?.HASH_TAG}</div> */}
            <div className="recipeitem">{recipeitem?.RCP_WAY2}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  
  </Row>
  )
}

export default SliderCard