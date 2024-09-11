import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import SliderCard from '../card/SliderCard'
import { Container } from 'react-bootstrap';
import './HomepageSlider.style.css'
const HomepageSlider = ({data,responsive}) => {
  console.log("ddd",data)
  return (
  
    <Container>
        <h4 className="slidertitle">냉털한 요리</h4>
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