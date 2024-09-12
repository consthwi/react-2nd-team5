import React from 'react'
import { useRecipeDataQuery } from '../../../../hooks/useRecipeData'
import { ClipLoader } from 'react-spinners';
import { Alert } from 'bootstrap';
import {responsive} from '../../../../constants/responsive';
import HomepageSlider from '../../../../common/Slider/HomepageSlider';

const MenuSlide = () => {
  const {data,isError,error,isLoading} = useRecipeDataQuery()
 if(isLoading){
  return  <div ><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div>
 }
 if(isError){return <Alert varient ="danger">{error.message}</Alert>}

  console.log(data)
  return (
   <HomepageSlider data={data} responsive={responsive}/>
  )
}

export default MenuSlide 