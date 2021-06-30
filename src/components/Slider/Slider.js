  
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {sliderFotos} from "../SliderData/SliderData";
import styled from 'styled-components';


const Img = styled.img `
  max-height: 60vh;

  @media(max-width: 600px) {
    max-width: 100vw;
  }
`

export const Slider = () => {
  let itemArray = [];
sliderFotos.map((el) => {
  itemArray.push(<Img src={el} alt='fotoaqui'/>)
  
})
  return (
    <AliceCarousel 
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={4000}
    animationDuration={1000}
    infinite
    touchTracking
    disableDotsControls
    disableButtonsControls={false}
    mouseTracking
    items={itemArray}/> 
  );
};
