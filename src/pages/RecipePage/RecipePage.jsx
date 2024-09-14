import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RecipePage.style.css";
import CardComponent from "./components/CardComponent";
import ReactPaginate from "react-paginate";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleBookmark } from "../../redux/reducer/bookmarkReducer";
import { useBookmark } from "../../hooks/useBookmark"; // useBookmark 훅 사용
import SelectMenu from "./components/SelectMenu";
import { useSearchParams } from "react-router-dom";
const ITEM_PER_PAGE = 12;

const RecipePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [query] = useSearchParams();
  const [keyword, setKeyword] = useState(query.get("q") || "");

  // const dispatch = useDispatch();

  // const bookmarkedRecipes = useSelector((state) => state.bookmark.items);
  // console.log(bookmarkedRecipes);
  
  const { bookmarkedRecipes, isBookmarked, toggleBookmark } = useBookmark(); // 훅 사용
  const { data, isLoading, error } = useRecipeDataQuery();
  console.log("bookmarkedRecipes from RecipePage:", bookmarkedRecipes);
  

  useEffect(() => {
    if (data) {
      setOriginalData(data);
    }
  }, [data]);

  const handleSortClick = (sortType) => {
    if (sort === sortType) {
      setSort("");
    } else {
      setSort(sortType);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFilter(selectedOption ? selectedOption.value : "");
    setSelectValue(selectedOption ? selectedOption.value : "");
  };

  const handleReset = () => {
    setKeyword("");
    setFilter("");
    setSort("");
  };

  const searchRecipe = keyword
    ? originalData.filter((recipe) => recipe.RCP_NM.includes(keyword))
    : originalData;

  //필터가 있으면 필터 데이터 없으면 기존 데이터
  const filterRecipe =
    filter.length > 0
      ? searchRecipe.filter((recipe) => recipe.RCP_PAT2.includes(filter))
      : searchRecipe;

  const sortRecipe =
    sort.length > 0 && sort === "INFO_PRO"
      ? [...filterRecipe].sort((a, b) => b[sort] - a[sort])
      : sort.length > 0
        ? [...filterRecipe].sort((a, b) => a[sort] - b[sort])
        : filterRecipe;

  // 필터가 바뀔떄마다 페이지네이션을 1페이지로 이동
  useEffect(() => {
    setCurrentPage(0);
  }, [filterRecipe, sortRecipe]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  // console.log(filterRecipe);

  //제공 데이터에 페이지와 아이템 갯수가 없어서 직접 구현
  // 12개씩 잘라서 랜더링
  //토탈페이지는 필터데이터를 렌더링 갯수로 나눈 수
  const startIndex = currentPage * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const paginateRecipes = sortRecipe.slice(startIndex, endIndex);
  const totalPage = Math.ceil(sortRecipe.length / ITEM_PER_PAGE);

  return (
    <Container className="recipe-page">
      <Row className="text-wrapper">
        <Col>
          <h1 className="text-center mt-3 mb-5">건강한 한끼 만들기</h1>
        </Col>
      </Row>

      <Row className="mb-5 ">
        <Col className="text-center mobile-button-spacing ">
          <Button
            variant="outline-primary"
            size="lg"
            className="me-2"
            onClick={handleReset}
            style={{
              backgroundColor: sort ? "transparent" : "#ED0C0C",
              color: sort ? "black" : "white",
              borderColor: sort ? "black" : "white",
              borderRadius: "2rem",
            }}
          >
            전체 보기
          </Button>
          <Button
            variant="outline-primary"
            style={{
              backgroundColor: sort === "INFO_ENG" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_ENG" ? "white" : "black",
              borderColor: sort === "INFO_ENG" ? "white" : "black",
              borderRadius: "2rem",
            }}
            size="lg"
            className="me-2"
            onClick={() => handleSortClick("INFO_ENG")}
          >
            저열량 레시피
          </Button>
          <Button
            variant="outline-primary"
            style={{
              backgroundColor: sort === "INFO_NA" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_NA" ? "white" : "black",
              borderColor: sort === "INFO_NA" ? "white" : "black",
              borderRadius: "2rem",
            }}
            size="lg"
            className="me-2"
            onClick={() => handleSortClick("INFO_NA")}
          >
            저염식 레시피
          </Button>
          <Button
            variant="outline-primary"
            style={{
              backgroundColor: sort === "INFO_PRO" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_PRO" ? "white" : "black",
              borderColor: sort === "INFO_PRO" ? "white" : "black",
              borderRadius: "2rem",
            }}
            size="lg"
            className="me-2"
            onClick={() => handleSortClick("INFO_PRO")}
          >
            고단백 레시피
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-end mb-3">
        <Col xs="auto">
          <SelectMenu
            selectValue={selectValue}
            handleSelectChange={handleSelectChange}
          />
        </Col>
      </Row>
      <Row className="g-3">
        {/* {paginateRecipes &&
          paginateRecipes.map((recipe) => {
            const isBookmarked =
              bookmarkedRecipes.length > 0
                ? bookmarkedRecipes.some(
                    (item) => item.RCP_SEQ === recipe.RCP_SEQ
                  )
                : false;
            return (
              <CardComponent
                key={recipe.RCP_SEQ}
                recipe={recipe}
                isBookmarked={isBookmarked}
                handleBookMark={() => dispatch(toggleBookmark(recipe))}
              />
            );
          })} */}
                {paginateRecipes &&
          paginateRecipes.map((recipe) => (
            <CardComponent
              key={recipe.RCP_SEQ}
              recipe={recipe}
              isBookmarked={isBookmarked(recipe)} // 훅을 통해 북마크 상태 확인
              handleBookMark={() => toggleBookmark(recipe)} // 북마크 토글
            />
          ))}
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <ReactPaginate
            previousLabel={"‹"}
            nextLabel={"›"}
            breakLabel={"..."}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;
