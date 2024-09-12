import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RecipePage.style.css";
import CardComponent from "./components/CardComponent";
import ReactPaginate from "react-paginate";

const ITEM_PER_PAGE = 12;
const ITEM_CAT = ["반찬", "국&찌개", "후식", "일품", "밥", "기타"];

const RecipePage = () => {
  const [filter, setFilter] = useState("");
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const [sortState, setSortState] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, error } = useRecipeDataQuery();

  useEffect(() => {
    if (data) {
      const recipesWithBookmark = data.map((recipe) => ({
        ...recipe,
        isBookmarked: false,
      }));
      setInitialRecipes(recipesWithBookmark);
      setFilteredRecipes(recipesWithBookmark);
      setSortedRecipes(recipesWithBookmark);
    }
  }, [data]);
  const sortByLowSodium = () => {
    if (sortedRecipes.length > 0) {
      const sorted = [...sortedRecipes].sort((a, b) => {
        const naA = parseInt(a.INFO_NA, 10);
        const naB = parseInt(b.INFO_NA, 10);

        return naA - naB;
      });
      setSortedRecipes(sorted);
      setSortState("sortByLowSodium");
    }
  };

  //데이터가 가지고 있는 카테고리
  //(6) ['반찬', '국&찌개', '후식', '일품', '밥', '기타']

  const handleFilterClick = (filterType) => {
    if (filter === filterType) {
      setFilteredRecipes(initialRecipes);
      setFilter("");
    } else {
      setFilter(filterType);
      if (filterType === "반찬") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
      if (filterType === "국&찌개") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
      if (filterType === "후식") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
      if (filterType === "일품") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
      if (filterType === "밥") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
      if (filterType === "기타") {
        setFilteredRecipes(
          initialRecipes.filter((recipe) =>
            recipe.RCP_PAT2.includes(filterType)
          )
        );
      }
    }
  };

  const handleBookMark = (recipeId) => {
    setInitialRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.RCP_SEQ === recipeId
          ? { ...recipe, isBookmarked: !recipe.isBookmarked }
          : recipe
      )
    );
  };
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredRecipes, sortState]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  console.log(filteredRecipes);
  console.log(sortedRecipes);

  const startIndex = currentPage * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const paginateRecipes = filteredRecipes.slice(startIndex, endIndex);
  const totalPage = Math.ceil(filteredRecipes.length / ITEM_PER_PAGE);

  return (
    <Container className="recipe-page">
      <Row>
        <Col>
          <h1 className="text-center mt-3 mb-5">건강한 한끼 만들기</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <div>
            {ITEM_CAT.map((item) => (
              <Button
                size="lg"
                className="me-2"
                variant={filter === item ? "success" : "primary"}
                onClick={() => handleFilterClick(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              variant={filter === "반찬" ? "success" : "primary"}
              size="lg"
              className="me-2"
              onClick={() => handleFilterClick("반찬")}
            >
              반찬
            </Button>
            <Button variant="primary" size="lg" className="me-2">
              저열량 레시피
            </Button>
            <Button
              variant={sortState === "sortByLowSodium" ? "success" : "primary"}
              size="lg"
              className="me-2"
              onClick={sortByLowSodium}
            >
              저염식 레시피
            </Button>
            <Button variant="primary" size="lg">
              채식 레시피
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="g-3">
        {paginateRecipes &&
          paginateRecipes.map((recipe) => (
            <CardComponent
              key={recipe.RCP_SEQ}
              recipe={recipe}
              handleBookMark={() => handleBookMark(recipe.RCP_SEQ)}
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
