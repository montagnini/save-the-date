import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import SliderData from "../SliderData/SliderData";

const Deck = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={4000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking
    controlsStrategy="alternate"
    items={SliderData}
  />
);

export default Deck;