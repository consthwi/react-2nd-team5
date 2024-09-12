import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import SliderCard from '../card/SliderCard'
import { Container } from 'react-bootstrap';
import './HomepageSlider.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpoon } from '@fortawesome/free-solid-svg-icons'
const HomepageSlider = ({data,responsive}) => {
  console.log("ddd",data)
  return (
  
    <Container>
      <div  className="slidertitle_big"><h4 className="slidertitle"> <FontAwesomeIcon icon={faSpoon} /> 뭘 좋아할지 몰라서 다!</h4></div>
        
         <Carousel
 infinite={true}
 centerMode={true}
 itemClass="recipe-slider p-1"
 containerClass="carousel-container"
 responsive={responsive}
> 
 
{data.map((recipeitem,index)=><SliderCard recipeitem={recipeitem} key={index}/>)}

</Carousel> 
    </Container>
  )
}

export default HomepageSlider