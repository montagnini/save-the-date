import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slider } from "./components/Slider/Slider";
import { Message } from "./components/Message/Message";
import { EasterEgg } from "./components/EasterEgg";
import { MediaCardGifts } from "./components/MediaCard/MediaCardGifts";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <main className="Body" style={{ overflowY: "hidden" }}>
              <Slider />
            </main>
          </Route>
          <Route exact path="/easterEgg">
            <EasterEgg />
          </Route>
          <Router exact path="/messages">
            <Message />
          </Router>
          <Router exact path="/dress-code">
            <div className="Body">
              <MediaCardGifts />
            </div>
          </Router>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
