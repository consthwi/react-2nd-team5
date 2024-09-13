import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { Alert } from "bootstrap";
import { responsiveTop } from "../../../../constants/responsiveTop";
import HomePageTopSlider from "../../../../common/Slider/HomePageTopSlider";
import LoadingGifImage from "../../../../common/LoadingGif/LoadingGif";

const TopSlide = () => {
  const { data, isError, error, isLoading } = useRecipeDataQuery();
  if (isLoading) {
    return <LoadingGifImage sectionHeight={"300px"} />;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  console.log(data);
  return <HomePageTopSlider data={data} responsive={responsiveTop} />;
};

export default TopSlide;
