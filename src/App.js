import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactLoading from "react-loading";

import React, { Suspense, useState } from "react";
import me from "../src/imgs/me.svg";
import Svg from "../src/components/Svg";

function App() {
  const [openAccess, setOpenAccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const skipAction = (action, event) => {
    event.preventDefault();
    if (action === "accessibility") {
      setOpenAccess(true);
    }
    if (action === "main") {
      const introContainer = document.querySelector("#intro");
      const focusableElements = introContainer.querySelectorAll(
        "input, select, textarea, button, a[href]"
      );
      const firstFocusableElement = focusableElements[0];
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      } else {
        // If no focusable element found within #intro, try focusing #intro itself
        introContainer.focus();
      }
    }
  };

  return (
    <div className="App">
      {loading && <ReactLoading type={"spinningBubbles"} id="loading" />}
      {!loading && (
        <>
          <button className="skip-link" onClick={(e) => skipAction("main", e)}>
            Skip to Content
          </button>
          <button
            onClick={(e) => skipAction("accessibility", e)}
            className="skip-link"
          >
            Open the accessibility widget
          </button>
          <Svg />

          <Navbar />
          <Router>
            <Suspense fallback={<ReactLoading type={"cubes"} id="loading" />}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Home
                      openAccess={openAccess}
                      setOpenAccess={setOpenAccess}
                      setLoading={setLoading}
                      loading={loading}
                    />
                  )}
                />
              </Switch>
            </Suspense>
          </Router>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
