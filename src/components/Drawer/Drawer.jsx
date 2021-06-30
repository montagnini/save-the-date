import { Drawer } from "@material-ui/core";
import { LinkDrawer } from "../LinkDrawer/LinkDrawer";
import './Drawer.css';

export const DrawerXablau = ({ open, handleClose, drawer, onLinkClick }) => {
  return (
    <Drawer className="teste"open={open} onClose={handleClose}>
      {drawer.map((el) => (
        <LinkDrawer link={el.link}
        label={el.label}
        icon={el.icon}
        onLinkClick={onLinkClick}/>
      ))}
    </Drawer>
  );
};
