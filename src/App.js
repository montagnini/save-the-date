import "./App.css";

import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Slider } from "./components/Slider/Slider";
import { Message } from "./components/Message/Message";
import { EasterEgg } from "./components/EasterEgg";

function App() {
  
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <main className="Body">
              <Slider />
            </main>
          </Route>
          <Route exact path="/easterEgg">
            <EasterEgg/>
          </Route>
          <Router exact path="/messages">
            <Message></Message>
          </Router>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
