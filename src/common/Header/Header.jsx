import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.style.css";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ModalMain from "../ModalMain/ModalMain";

const menuList = ["든든하게,건강식", "바쁠땐,간편식", "출출할때?간식"];

const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  // 모바일 모달 핸들러
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // 상단로고 클릭 시 홈으로
  const goToHome = () => {
    navigate('/')
  }

  return (
    <>
      <ModalMain isOpen={isOpen} menuList={menuList} toggleMenu={toggleMenu} />
      <Container className="header">
      <h1 onClick={goToHome} className="header-logo"><img src={`${process.env.PUBLIC_URL}/logo_5.png`} alt="logo"/></h1>
      <ul className="header-nav-bar">
        <li>
          <Link to="/">{menuList[0]}</Link>
        </li>
        <li>
          <Link to="/">{menuList[1]}</Link>
        </li>
        <li>
          <Link to="/">{menuList[2]}</Link>
        </li>
      </ul>
      <ul className="header-right">
        {/* mobile일 경우 btn-search, btn-mobile-menu addClass active */}
        <li className="header-search">
        <Link><BsSearch className="btn-search"/></Link>
        </li>
        <li className="header-user">
        <Link><BsPerson className="btn-login"/></Link>
        </li>
        <li className="header-cart">
        <Link><BsBookmark className="btn-cart"/></Link>
        </li>
        <li className="header-mobile-menu" onClick={toggleMenu}>
        <Link><BsList className="btn-mobile-menu"/></Link>
        </li>
      </ul>
    </Container>
    </>

  );
};

export default Header;
