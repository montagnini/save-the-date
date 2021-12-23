import { useState } from "react";
import Countdown from "../Countdown/Countdown";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerXablau } from "../Drawer/Drawer";

import "./Header.css";

export const Header = () => {
  const links = [
    {
      link: "/",
      label: "Home",
      icon: "home",
    }, 
    {
      link: "/regular-photos",
      label: "Fotos do Casal",
      icon: "photo_camera",
    },
    {
      link: "/pre-wedding",
      label: "Pré Wedding",
      icon: "favorite",
    },
    {
      link: "/message",
      label: "Mensagens",
      icon: "comment",
    },
    {
      link: "/gifts",
      label: "Gifts",
      icon: "redeem",
    },
    {
      link: "/dress-code",
      label: "Dress Code",
      icon: "dry_cleaning",
    },
    {
      link: "/easterEgg",
      label: "EasterEgg",
      icon: "favorite",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header_left">
        <DrawerXablau
          open={open}
          drawer={links}
          onLinkClick={setOpen}
          handleClose={() => setOpen(false)}
        />
        <IconButton onClick={() => setOpen(!open)} style={{ color: "#808e95" }}>
          <MenuIcon style={{ width: "50%", height: "50%" }} className='menu-icon' />
        </IconButton>
      </div>
      <div className="header_center">
        <h2>Together since </h2>
        <Countdown date="August 28, 2021 16:00:00 GMT+03:00" />
      </div>
    </header>
  );
};
