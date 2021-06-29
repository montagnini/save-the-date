import "./App.css";
import {useState} from 'react';

import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { Slider } from "./components/Slider/Slider";
import { Message } from "./components/Message/Message";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerXablau } from "./components/Drawer";
import { EasterEgg } from "./components/EasterEgg";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      
      {/* <DrawerXablau open={open} handleClose={() => setOpen(false)}>
        </DrawerXablau>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton> */}
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
