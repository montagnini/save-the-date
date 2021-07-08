import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";

import { MediaCardUnit } from "./MediaCardUnit";
import "./MediaCard.css";

const Img = styled.img`
  max-height: 60vh;

  @media (max-width: 600px) {
    max-width: 100vw;
  }
`;

export const MediaCardList = ({ list }) => {
  const [open, setOpen] = React.useState(false);
  const [openSecondModal, setOpenSecondModal] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const handleOpen = (img, label, value) => {
    setOpen(true);
    setSelected({ img: img, label: label, value: value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenSecondModal = () => {
    setOpenSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setOpenSecondModal(false);
    handleClose();
  };

  return (
    <div>
      <div className="media-card-list">
        {list.map((el, index) => (
          <MediaCardUnit
            key={index}
            img={el.img}
            label={el.label}
            onClick={() => handleOpen(el.img, el.label, el.value)}
          />
        ))}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"modal"}
        style={{ background: "black" }}
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
            <h2 style={{ color: "white" }}>{selected.label}</h2>
            <h2 style={{ color: "white" }}>{selected.value}</h2>
            {selected.value ? (
              <button
                
                className="button_form"
                onClick={handleOpenSecondModal}
              > ♡ Comprar ♡</button>
            ) : undefined}
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"modal"}
        style={{ background: "black" }}
        open={openSecondModal}
        onClose={handleCloseSecondModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSecondModal}>
          <div className={"paper"}>
            <h2 style={{ color: "white" }}>PIX: 41 99661-2282</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
