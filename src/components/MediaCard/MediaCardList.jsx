import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { sliderFotos } from "../SliderData/SliderData";
import styled from "styled-components";

import { MediaCardUnit } from "./MediaCardUnit";
import "./MediaCard.css";

export const MediaCardList = ({ list }) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const handleOpen = (img, label) => {
    setOpen(true);
    setSelected({ img: img, label: label });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Img = styled.img`
    max-height: 60vh;

    @media (max-width: 600px) {
      max-width: 100vw;
    }
  `;
  return (
    <div>
      <div class="media-card-list">
        {list.map((el) => (
          <MediaCardUnit
            img={el.img}
            label={el.label}
            onClick={() => handleOpen(el.img, el.label)}
          />
        ))}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"modal"}
        style={{background:'black'}}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={"paper"}>
            <Img src={selected.img} alt="azar" />
            <h2 style={{color: 'white'}}>{selected.label}</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
