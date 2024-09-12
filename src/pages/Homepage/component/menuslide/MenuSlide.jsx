import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import HomepageSlider from "../../../../common/Slider/HomepageSlider";
import LoadingGifImage from "../../../../common/LoadingGif/LoadingGif";

const MenuSlide = () => {
  const { data, isError, error, isLoading } = useRecipeDataQuery();
  if (isLoading) {
    return <LoadingGifImage sectionHeight={"300px"} />;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  console.log(data);
  return <HomepageSlider data={data} responsive={responsive} />;
};

export default MenuSlide;
