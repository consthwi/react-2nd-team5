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
  //container바꿈.
    <div>
      <div  className="slidertitle_big"><h3 className="slidertitle"> <FontAwesomeIcon icon={faSpoon} /> 뭘 좋아할지 몰라서 다!</h3></div>
        
         <Carousel
 infinite={true}
 centerMode={true}
 itemClass="recipe-slider p-1"
 containerClass="carousel-container2"
 responsive={responsive}
 autoPlay={true}                  // 자동 재생 활성화
 autoPlaySpeed={3000}  
> 
 
{data.map((recipeitem,index)=><SliderCard recipeitem={recipeitem} key={index}/>)}

</Carousel> 
    </div>
  )
}

export default HomepageSlider