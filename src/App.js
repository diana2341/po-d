import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactLoading from "react-loading";

import React, { Suspense } from "react";
import me from "../src/imgs/me.svg";
import Svg from "../src/components/Svg";

function App() {
  return (
    <div className="App">
      {/* <img src={me} className="background-svg" alt="Background SVG"/> */}
      <Svg />
      <Navbar />
      <Router >
        <Suspense fallback={<ReactLoading type={"cubes"} id="loading" />}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
