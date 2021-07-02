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
          <Route exact path="/dress-code">
            <MenWomen />
          </Route>
          <Route exact path="/easterEgg">
            <EasterEgg />
          </Route>
          <Router exact path="/messages">
            <Message />
          </Router>
          <Router exact path="/gifts">
            <div className="Body">
              <MediaCardGifts />
            </div>
          </Router>
          <Router exact path="/dress-code/women">
            <div className="Body">
              <MediaCardDress type="women" />
            </div>
          </Router>
          <Router exact path="/dress-code/men">
            <div className="Body">
              <MediaCardDress className="Body" type="men" />
            </div>
          </Router>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
