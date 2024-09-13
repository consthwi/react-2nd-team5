import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./StepComponent.style.css";

const StepComponent = ({ manualImg, manualText }) => {
  return (
    <div className="recipe-step">
      {manualImg.map((img, index) => (
        <div className="repeat-box" key={index}>
          <span>
            <img className="step-img" src={img} />
          </span>
          <span className="ms-4 step-text">{manualText[index].substr(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default StepComponent;
