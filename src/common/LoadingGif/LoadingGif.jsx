import React from "react";
import "./LoadingGif.style.css";
import LoadingGifImage from "../assets/LoadingGif_x2.gif";

const LoadingGif = ({ sectionHeight }) => {
  return (
    // LoadingGif 컴포넌트 호출 시, sectionHeight 지정, 기본값 100vh
    <div className="loading-gif" style={{ height: sectionHeight }}>
      <strong>불러오는 중입니다..</strong>
      <img src={LoadingGifImage} alt="loading" />
    </div>
  );
};

export default LoadingGif;
