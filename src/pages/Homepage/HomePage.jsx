import React, { useState } from "react";
import MenuSlide from "./component/menuslide/MenuSlide";
import "./HomePage.style.css";
import RandomSlide from "./component/randomslide/RandomSlide";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import BookmarkInfo from "./component/bookmarkslide/BookmarkInfo";

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
        <form onSubmit={searchByKeyword}>
          <div className="input-box">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <IoSearch size="24px" color="#ed0c0c" className="mb-2" />
          </div>
        </form>
      </div>

      <div classNmae="home_page_banner_container">
        <div
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg)",
          }}
          className="hompage_img mainbanner_big_container"
        >
          <h5 className="homepage_banner_name">
            <span class="homepage_spanstyle">오늘 저녁은 뭐먹지?!</span>
          </h5>
          <p className="hompage_banner_p">
            <span class="homepage_spanstyle">
              지금 한 번 냉장고를 열어보세요~
            </span>
          </p>
          <div>
            <span className="homepage_banner_span homepage_spanstyle ">
              '냉털한 한끼'
            </span>
            <span className="hompage_banner_p2 homepage_spanstyle">
              가 뭐든 맛있게 해드리겠습니다~!
            </span>
          </div>
        </div>
        {/* <Baner/> */}
      </div>
      <div>
        <MenuSlide />
        <RandomSlide />
        <BookmarkInfo />
      </div>
    </div>
  );
};

export default HomePage;
