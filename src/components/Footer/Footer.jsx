import Audio from "../Audio/Audio";
import { FaInstagram } from "react-icons/fa";

import './Footer.css';

export const Footer = () => {
    return ( <footer className="Footer">
    <div className="footer_2">
      <div className="Insta">
        <div style={{ marginRight: "5%" }}>
          <a
            href="https://www.instagram.com/naylapallu/"
            alt="n"
            className="anchor_insta"
            rel="noreferrer"
            target="_blank">
            <FaInstagram size={56}></FaInstagram>
            <div>Nayla</div>
          </a>
        </div>
        <div style={{ marginLeft: "15%" }}>
          <a
            href="https://www.instagram.com/wmontagnin/"
            alt="n"
            className="anchor_insta"
            rel="noreferrer"
            target="_blank">
            <FaInstagram size={56}></FaInstagram>
            <div>Wellington</div>
          </a>
        </div>
      </div>
      <div>
        <Audio></Audio>
      </div>
    </div>
  </footer>)
}