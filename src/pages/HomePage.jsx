import React from 'react'
import MenuSlide from './Homepage/component/menuslide/MenuSlide'
import { Col, Container, Row } from 'react-bootstrap'
import './Homepage/HomePage.style.css'
import RandomSlide from './Homepage/component/randomslide/RandomSlide'
const HomePage = () => {
  return (
    <Container>
    <Row>
   <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg)"}} className="hompage_img">

   </div>
    
   
    </Row>
    <Row>
      <MenuSlide/>
      <RandomSlide/>
    </Row>
    <Row >
     
    {/* <Col className="homepage_4">건강한 한끼</Col>
      <Col className="homepage_4">든든한 한끼</Col>
      <Col className="homepage_4">가벼운 한끼</Col> */}
    
    </Row>
  </Container>
  )
}

export default HomePage