import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.style.css"

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='footer-wrapper'>
        <Row className=''>
          <Col lg="8" className="footer-left">
            <div className='footer-left-text'>
              <p>㈜냉털한끼 컴퍼니</p>
              <address>주소: 경기도 코딩시 누나로 1004번길 리액트빌딩 5호</address>
              <p>사업자등록번호: 134-20-192342</p>
              <p>Tel: 1566-5682</p>
              <p>E-mail: info@naengteol.com</p>
            </div>
          </Col>
          <Col lg="4" className="footer-right">
            <div className='footer-right-img1'>
              <img src={`${process.env.PUBLIC_URL}/logo_5.png`}/>
            </div>
            <div className='footer-right-img2'>
              <img src={`${process.env.PUBLIC_URL}/image03.png`}/>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Footer
