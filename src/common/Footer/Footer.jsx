import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.style.css"

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='footer-wrapper'>
        <div className='footer-text'>
          <p>㈜냉털한끼 컴퍼니</p>
          <address>주소: 경기도 코딩시 누나로 1004번길 리액트빌딩 5호</address>
          <p>공동대표: 강휘원, 김성연, 박민선, 안치호, 변하영</p>
          <p>Tel: 1566-5682</p>
          <p>E-mail: info@naengteol.com</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/logo_5.png`} alt='footer-img'/>
      </Container>
      <div className='footer-deco'></div>
    </div>
  )
}

export default Footer
