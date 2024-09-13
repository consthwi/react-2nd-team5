import React, { useState } from 'react';
import "./SliderCard.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";

const SliderCard = ({ recipeitem, key }) => {
    const navigate = useNavigate();
    const [bookmarkStates, setBookmarkStates] = useState({});

    
    const beBookmarked = bookmarkStates[key] || false;

  
    const godetail = () => {
        navigate(`/recipes/${recipeitem?.RCP_NM}`);
    }

    // 토글
    const handleToggleBookmark = (event) => {
        event.stopPropagation(); 
        setBookmarkStates((prevStates) => {
            const newState = { ...prevStates };
            newState[key] = !newState[key]; 
            return newState;
        });
    }

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
                    <Card.Body className="card_text">
                        <Card.Title 
                            className="slidercard_rcp_nm"  
                            onClick={godetail}
                        >
                            <FontAwesomeIcon icon={faUtensils} /> {recipeitem?.RCP_NM}
                        </Card.Title>
                        <Card.Text>
                            {beBookmarked ? (
                                <PiBookmarkSimpleFill
                                    className="bookmark-icon-inSlidercard"
                                    size="3rem"
                                    onClick={handleToggleBookmark}
                                />
                            ) : (
                                <PiBookmarkSimpleThin
                                    className="bookmark-icon-inSlidercard"
                                    size="3rem"
                                    onClick={handleToggleBookmark}
                                />
                            )}
                            <div className="recipeitem">{recipeitem?.RCP_WAY2}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SliderCard;
