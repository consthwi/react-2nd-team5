import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ModalMain.style.css";

const ModalMain = ({ isOpen, menuList, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className={`modal-layer ${isOpen ? "open" : ""}`}>
      <div
        onClick={toggleMenu}
        className={`btn-modal-close ${isOpen ? "open" : ""}`}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="modal-content">
        <h2 className="modal-content-title">Menu List</h2>
        <ul className={`modal-nav`}>
          {menuList.map((menu, idx) => {
            return (
              <li
                className={`modal-nav-menu ${isOpen ? "active" : ""}`}
                key={idx}
              >
                <Link className="modal-nav-a" to="/login">
                  {menu}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="modal-deco-sidebar"></div>
        <div className="modal-deco-bottom">
          <div className="modal-deco-clip"></div>
          <div className="modal-deco-img">
            <img
              src={`${process.env.PUBLIC_URL}/image03.png`}
              alt="modal-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMain;
