import React, { useState } from "react";
import MenuSlide from "./component/menuslide/MenuSlide";
import "./HomePage.style.css";
import { IoSearch } from "react-icons/io5";
import TopSlide from "./component/TopSlide/TopSlide";
import { useNavigate } from "react-router-dom";
import BookmarkInfo from "./component/bookmarkslide/BookmarkInfo";
import RandomRecipe from "./component/RandomRecipe/RandomRecipe";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`recipes?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <div className="top-area">
        <div className="top-text">
          냉장고 속 재료로
          <br /> 레시피를 검색하세요!
        </div>
        <div className="input-box">
          <input></input>
          <IoSearch size="26px" color="#ed0c0c" className="mb-2" />
        </div>
      </div>
      <div className="top-slide-area">
        <TopSlide />
      </div>
      <div classNmae="home_page_banner_container">{/* <Baner/> */}</div>
      <div>
        <MenuSlide />
        {/* RandomSlide에서 RandomeRecipe로 변경 */}
        <RandomRecipe />
        <BookmarkInfo />
      </div>
    </div>
  );
};

export default HomePage;
