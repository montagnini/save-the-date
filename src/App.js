import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/SliderData/SliderData";
import Hands from "./Images/hands.png";
import Audio from './components/Audio/Audio';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header_left">
          <img src={Hands} alt="Hands" />
        </div>
        <div className="header_center">
          <h3>Save the date!</h3>
          <Countdown date="August 28, 2021 18:30:00 GMT+03:00" />
        </div>
        <div className="header_right"></div>
      </header>
      <main className="Body">
        <ImageSlider slides={SliderData} />
      </main>
      <footer className="Footer">
        <Audio></Audio>
      </footer>
    </div>
  );
}

export default App;
