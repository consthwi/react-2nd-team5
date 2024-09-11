import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RecipePage.style.css";
import CardComponent from "./components/CardComponent";
import ReactPaginate from "react-paginate";

const ITEM_PER_PAGE = 20;

const RecipePage = () => {
  const [sortState, setSortState] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, error } = useRecipeDataQuery();

  useEffect(() => {
    if (data) {
      const recipesWithBookmark = data.map((recipe) => ({
        ...recipe,
        isBookmarked: false,
      }));
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
  const handleReset = () => {
    setSortedRecipes(filteredRecipes);
    setSortState("all");
  };
  const handleBookMark = (index) => {
    setSortedRecipes((prevRecipes) =>
      prevRecipes.map((recipe, i) =>
        i === index ? { ...recipe, isBookmarked: !recipe.isBookmarked } : recipe
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
  const paginateRecipes = sortedRecipes.slice(startIndex, endIndex);
  const totalPage = Math.ceil(sortedRecipes.length / ITEM_PER_PAGE);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-3 mb-5">건강한 한끼 만들기</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <div>
            <Button
              variant={sortState === "all" ? "success" : "primary"}
              size="lg"
              className="me-2"
              onClick={handleReset}
            >
              all
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
          paginateRecipes.map((recipe, index) => (
            <CardComponent
              key={index}
              recipe={recipe}
              index={index}
              handleBookMark={handleBookMark}
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
