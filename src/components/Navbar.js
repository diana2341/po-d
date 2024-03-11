import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

import LogoName from "./logoName";

import Toggle from "./toggle.js";

export default function NavComponent() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem("mode");
    if (value === "light") {
      setLight(false);
      document.body.style.backgroundColor = `#89c0d2`;
      document
        .querySelector("nav.navbar.bg-light.fixed-top")
        .classList.remove("darkNav");
      document.querySelector(".navbar-brand").classList.remove("light-logo");
      document.querySelector(".accessibility-btn svg").style.color = "#34465e";

      document.querySelector("#jumbo").classList.remove("light-jumbo");
      Array.from(document.getElementsByClassName("card")).map((card) =>
        card.classList.remove("light-card")
      );
    } else if (value === "dark") {
      setLight(true);

      document.body.style.backgroundColor = `#224b59`;
      document
        .querySelector("nav.navbar.bg-light.fixed-top")
        .classList.add("darkNav");
		document.querySelector(".accessibility-btn svg").style.color = "white";

      document.querySelector(".navbar-brand").classList.add("light-logo");
      document.querySelector("#jumbo").classList.add("light-jumbo");
      Array.from(document.getElementsByClassName("card")).map((card) =>
        card.classList.add("light-card")
      );
    }
  });
  const lightDark = () => {
    setLight(!light);
    localStorage.setItem("mode", light ? "light" : "dark");

    if (!light) {
      localStorage.setItem("mode", "dark");

      document.querySelector(".App").style.backgroundColor = `#224b59`;
      document
        .querySelector("nav.navbar.bg-light.fixed-top")
        .classList.add("darkNav");
      document.querySelector(".navbar-brand").classList.add("light-logo");
      document.querySelector("#jumbo").classList.add("light-jumbo");
      Array.from(document.getElementsByClassName("card")).map((card) =>
        card.classList.add("light-card")
      );
    } else if (light) {
      document.querySelector(".App").style.backgroundColor = `#89c0d2`;
      document
        .querySelector("nav.navbar.bg-light.fixed-top")
        .classList.remove("darkNav");
      document.querySelector(".navbar-brand").classList.remove("light-logo");
      document.querySelector("#jumbo").classList.remove("light-jumbo");
      Array.from(document.getElementsByClassName("card")).map((card) =>
        card.classList.remove("light-card")
      );
    }
  };

  return (
    <Navbar expand="lg" fixed="top" bg="light" variant="light" id="lg">
      <Navbar.Brand id="log" href="/">
        <LogoName />
      </Navbar.Brand>
      <div className="mobile-toggle">
        <Toggle lightDark={lightDark} light={light} setLight={setLight} />
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#"
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              document.getElementById("about")?.scrollIntoView(true)
            }
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              document.getElementById("project")?.scrollIntoView(true)
            }
          >
            Projects
          </Nav.Link>
          <div className="main-toggle">
            <Toggle lightDark={lightDark} light={light} setLight={setLight} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
