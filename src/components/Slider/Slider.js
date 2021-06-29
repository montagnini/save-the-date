import React from "react";
import Carousel from "react-material-ui-carousel";

import SliderData from "../SliderData/SliderData";

export const Slider = (props) => {
  return (
    <Carousel navButtonsAlwaysVisible
    stopAutoPlayOnHover>
      {SliderData}
    </Carousel>
  );
};
