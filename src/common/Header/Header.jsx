import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.style.css";
import { Link } from "react-router-dom";

const menuList = ["든든하게,건강식", "바쁠땐,간편식", "출출할때?간식"];

const Header = () => {
  return (
    <Container className="header">
      <h1 className="header-logo">logo</h1>
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
      <div className="header-right">
        <Link className="header-user">icon1</Link>
        <Link className="header-cart">icon2</Link>
        <Link className="header-hamburger">icon3</Link>
      </div>
    </Container>
  );
};

export default Header;
