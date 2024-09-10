import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./RecipePage.style.css";
const RecipePage = () => {
  const [sortState, setSortState] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const { data, isLoading, error } = useRecipeDataQuery();

  useEffect(() => {
    if (data) {
      setFilteredRecipes(data);
      setSortedRecipes(data);
    }
  }, [data]);
  const sortByLowSodium = () => {
    if (filteredRecipes.length > 0) {
      const sorted = [...filteredRecipes].sort((a, b) => {
        const naA = parseInt(a.INFO_NA, 10);
        const naB = parseInt(b.INFO_NA, 10);

        return naA - naB;
      });
      setSortedRecipes(sorted);
      setSortState("sortByLowSodium");
    }
  };
  const handleReset = () => {
    setSortedRecipes(data);
    setSortState("all");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  console.log(filteredRecipes);
  console.log(sortedRecipes);
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
        {sortedRecipes &&
          sortedRecipes.map((recipe, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Img variant="top" src={recipe.ATT_FILE_NO_MAIN} />{" "}
                <Card.Body>
                  <Card.Text
                    className="text-ellipsis"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {recipe.RCP_PAT2}
                  </Card.Text>
                  <Card.Title>{recipe.RCP_NM}</Card.Title>
                  <Card.Text className="text-ellipsis">
                    {recipe.RCP_NA_TIP}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default RecipePage;
