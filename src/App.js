import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SliderWedding } from "./components/Slider/SliderWedding";
import { SliderRegular } from "./components/Slider/SliderRegular";
import { SliderPreWedding } from "./components/Slider/SliderPreWedding";
import { Message } from "./components/Message/Message";
import { EasterEgg } from "./components/EasterEgg";
import { MediaCardGifts } from "./components/MediaCard/MediaCardGifts";
import { FaInstagram } from "react-icons/fa";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MenWomen } from "./components/MenWomen/MenWomen";
import { MediaCardDress } from "./components/MediaCard/MediaCardDress";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <main className="Body" style={{ overflowY: "hidden" }}>
              <SliderWedding  />
            </main>
            <h2>
              <a
                href="https://www.instagram.com/renato.bckr"
                alt="n"
                rel="noreferrer"
                target="_blank"
                className="anchor"
              >
                <div className="insta">
                  <FaInstagram
                    style={{ marginRight: "1%" }}
                    size={56}
                  ></FaInstagram>
                  <h2>Renato Becker</h2>
                </div>
              </a>
            </h2>
          </Route>
          <Route exact path="/regular-photos">
            <main className="Body" style={{ overflowY: "hidden" }}>
              <SliderRegular />
            </main>
          </Route>
          <Route exact path="/pre-wedding">
            <main className="Body" style={{ overflowY: "hidden" }}>
              <SliderPreWedding />
            </main>
            <h2>
              <a
                href="https://www.instagram.com/renato.bckr"
                alt="n"
                rel="noreferrer"
                target="_blank"
                className="anchor"
              >
                <div className="insta">
                  <FaInstagram
                    style={{ marginRight: "1%" }}
                    size={56}
                  ></FaInstagram>
                  <h2>Renato Becker</h2>
                </div>
              </a>
            </h2>
          </Route>
          <Route exact path="/dress-code">
            <div className="Body">
              <h1>Sem ideia de trajes? Aqui damos algumas dicas.</h1>
              <MenWomen />
            </div>
          </Route>
          <Route exact path="/easterEgg">
            <EasterEgg />
          </Route>
          <Router exact path="/message">
            <div className="Body">
              <Message />
            </div>
          </Router>
          <Router exact path="/gifts">
            <div className="Body">
              <h1 style={{ marginTop: "1%" }}>Presentinhos!!!!</h1>
              <MediaCardGifts fundo="black" />
            </div>
          </Router>
          <Router exact path="/dress-code/women">
            <div className="Body">
              <MediaCardDress type="women" />
            </div>
          </Router>
          <Router exact path="/dress-code/men">
            <div className="Body">
              <MediaCardDress type="men" />
            </div>
          </Router>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
