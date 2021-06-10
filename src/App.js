import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Hands from "./Images/hands.png";
import Audio from "./components/Audio/Audio";

import { FaInstagram } from "react-icons/fa";
import Deck from "./components/Slider/Deck";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header_left">
          <img src={Hands} alt="Hands" />
        </div>
        <div className="header_center">
          <h2>Save the date!</h2>
          <Countdown date="August 28, 2021 18:30:00 GMT+03:00" />
        </div>
      </header>
      <main className="Body">
        <Deck></Deck>
      </main>
      <footer className="Footer">
        <div className="footer_2">
          <div className="Insta">
            <div style={{ marginRight: "5%" }}>
              <a href="https://www.instagram.com/naylapallu/" alt="n">
                <FaInstagram size={56}></FaInstagram>
                <div>Nayla</div>
              </a>
            </div>
            <div style={{ marginLeft: "15%" }}>
              <a href="https://www.instagram.com/wmontagnin/" alt="n">
                <FaInstagram size={56}></FaInstagram>
                <div>Wellington</div>
              </a>
            </div>
          </div>
          <div>
            <Audio></Audio>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
