import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slider } from "./components/Slider/Slider";
import { Message } from "./components/Message/Message";
import { EasterEgg } from "./components/EasterEgg";
import { MediaCardGifts } from "./components/MediaCard/MediaCardGifts";

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
              <Slider folder="/Foto-Home" />
            </main>
          </Route>
          <Route exact path="/pre-wedding">
            <h1>
              Fotos tiradas e sendo trabalhadas pelo
              <a
                href="https://www.instagram.com/renato.bckr"
                alt="n"
                rel="noreferrer"
                target="_blank"
                className='anchor'
              >
                <h2>Renato Becker</h2>
              </a>
            </h1>
          </Route>
          <Route exact path="/dress-code">
            <div className="Body">
              <h1>
                Sem ideias dos trajes? Aqui você encontrará algumas dicas.
              </h1>
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
            <h1 style={{marginTop: '1%'}}>Presentinhos!!!!</h1>
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
