import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RecipePage.style.css";
import CardComponent from "./components/CardComponent";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../../redux/reducer/bookmarkReducer";
import SelectMenu from "./components/SelectMenu";

const ITEM_PER_PAGE = 12;

const RecipePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const dispatch = useDispatch();
  const bookmarkedRecipes = useSelector((state) => state.bookmark.items);
  console.log(bookmarkedRecipes);
  const { data, isLoading, error } = useRecipeDataQuery();

  // 북마크의 여부를 확인하기 위해 기존 데이터에 북마크 여부를 추가한 후 저장
  useEffect(() => {
    if (data) {
      setOriginalData(data);
    }
  }, [data]);

  // 필터의 상태를 정의
  // const handleFilterClick = (filterType) => {
  //   if (filter === filterType) {
  //     setFilter("");
  //   } else {
  //     setFilter(filterType);
  //   }
  // };

  const handleSortClick = (sortType) => {
    if (sort === sortType) {
      setSort("");
    } else {
      setSort(sortType);
    }
  };
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
    setSelectValue(event.target.value);
  };

  //필터가 있으면 필터 데이터 없으면 기존 데이터
  const filterRecipe =
    filter.length > 0
      ? originalData.filter((recipe) => recipe.RCP_PAT2.includes(filter))
      : originalData;

  const sortRecipe =
    sort.length > 0
      ? [...filterRecipe].sort((a, b) => a[sort] - b[sort])
      : filterRecipe;

  //북마크를 위한 코드
  // 누른 북마크의 일련번호를 활용 일련번호가 일치할시 북미크 여부를 토글
  // const handleBookMark = (recipeId) => {
  //   const updatedRecipes = originalData.map((recipe) =>
  //     recipe.RCP_SEQ === recipeId
  //       ? { ...recipe, isBookmarked: !recipe.isBookmarked }
  //       : recipe
  //   );

  //   setOriginalData(updatedRecipes);

  //   const updateRecipe = updatedRecipes.find(
  //     (recipe) => recipe.RCP_SEQ === recipeId
  //   );
  //   dispatch(toggleBookmark(updateRecipe));
  // };

  // 필터가 바뀔떄마다 페이지네이션을 1페이지로 이동
  useEffect(() => {
    setCurrentPage(0);
  }, [filterRecipe]);

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
      <Row>
        <Col>
          <h1 className="text-center mt-3 mb-5">건강한 한끼 만들기</h1>
        </Col>
      </Row>

      <Row className="mb-5 ">
        <Col className="text-center">
          <div>
            <Button
              variant="primary"
              size="lg"
              className="me-2"
              onClick={() => handleSortClick("INFO_ENG")}
            >
              저열량 레시피
            </Button>
            <Button
              size="lg"
              className="me-2"
              onClick={() => handleSortClick("INFO_NA")}
            >
              저염식 레시피
            </Button>
          </div>
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
        {paginateRecipes &&
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
          })}
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
