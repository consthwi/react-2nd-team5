import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import HomepageSlider from "../../../../common/Slider/HomepageSlider";
import LoadingLottie from "../../../../common/LoadingLottie/LoadingLottie";

const MenuSlide = () => {
  const { data, isError, error, isLoading } = useRecipeDataQuery();
  if (isLoading) {
    return <LoadingLottie sectionHeight={"300px"} />;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  console.log(data);
  return <HomepageSlider data={data} responsive={responsive} />;
};

export default MenuSlide;
