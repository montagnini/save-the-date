import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { sliderFotos } from "../SliderData/SliderData";

import styled from "styled-components";

const Img = styled.img`
  max-height: 60vh;

  @media (max-width: 600px) {
    max-width: 100vw;
  }
`;

export const Slider = ({ folder }) => {
  const [listSrc, setListSrc] = useState([]);

  let itemArray = [];

  function updateData() {
    sliderFotos.map((el) => {
      itemArray.push(<Img src={el} />);
    });
    setListSrc(itemArray);
  }

  useEffect(() => updateData(), []);

  return (
    (
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={4000}
        animationDuration={1000}
        infinite
        touchTracking
        keyboardNavigation
        animationType="fadeout"
        mouseTracking
        items={listSrc}
      />
    )
  );
};
