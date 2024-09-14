import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import TopSliderCard from "../card/TopSliderCard";
import "./HomePageTopSlider.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";

const HomePageTopSlider = ({ data, responsiveTop }) => {
  // data가 배열이 아닌 경우 빈 배열로 설정
  const sliderData = Array.isArray(data) ? data : [];

  return (
    <div>
      {/* sliderData가 존재하고 비어 있지 않은 경우에만 Carousel 렌더링 */}
      {sliderData.length > 0 ? (
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="recipe-slider p-1"
          containerClass="carousel-container2"
          responsive={responsiveTop}
          autoPlay={true} // 자동 재생 활성화
          autoPlaySpeed={5000}
        >
          {sliderData.map((recipeitem, index) => (
            <TopSliderCard recipeitem={recipeitem} key={index} />
          ))}
        </Carousel>
      ) : (
        // 데이터가 없을 때 표시할 내용 (필요에 따라 변경)
        <p>데이터 없음</p>
      )}
    </div>
  );
};

export default HomePageTopSlider;
