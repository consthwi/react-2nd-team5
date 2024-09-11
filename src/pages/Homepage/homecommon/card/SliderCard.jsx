import React from 'react'
import "./SliderCard.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const SliderCard = ({recipeitem,key}) => {
    const navigate = useNavigate();
    const godetail=()=>{
        // navigate(`/recipes/${recipeitem?.RCP_NM}`)
        navigate('/recipes')
    }
  return (
    <div style={{backgroundImage:"url("+`${recipeitem?.ATT_FILE_NO_MAIN}`+")"}} className="slidercard_url" onClick={godetail}>
        <div className="overlay">
        <div className="slidercard_rcp_nm"><FontAwesomeIcon icon={faUtensils} /> {recipeitem?.RCP_NM}</div>
        <div>{recipeitem?.RCP_SEQ}</div>
        <div>{recipeitem?.RCP_WAY2}</div>
        </div>
    </div>
  )
}

export default SliderCard