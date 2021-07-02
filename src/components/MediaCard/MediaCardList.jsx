
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {sliderFotos} from "../SliderData/SliderData";
import styled from 'styled-components';

import { MediaCardUnit } from "./MediaCardUnit";
import "./MediaCard.css";

export const MediaCardList = ({ list }) => {

  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState('');

  const handleOpen = (img) => {
    setOpen(true);
    setSelectedImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Img = styled.img `
  max-height: 60vh;

  @media(max-width: 600px) {
    max-width: 100vw;
  }
`
  return (
    <div>
       <div class='media-card-list'>
      {list.map((el) => (
        <MediaCardUnit img={sliderFotos[10]} label={el.label} onClick={() => handleOpen(sliderFotos[10])} />
      ))}
    </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={'paper'}>
           
           <Img src={selectedImg} alt='azar'/>
          </div>
        </Fade>
      </Modal>
    </div>
  );

};

