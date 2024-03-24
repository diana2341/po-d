import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Me from "../imgs/developer6.js";
import Accessibility from "./Accessibility.js";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { AiOutlinePlayCircle } from "react-icons/ai";
// import pausedBG from "../imgs/me.svg";
// import playdBG from "../imgs/bg.svg";

import { Jumbotron, Row, Col } from "react-bootstrap";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiGithub } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
// import { SiMaterialui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiFigma } from "react-icons/si";

import info from "./info";
import { redirect } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ openAccess, setOpenAccess }) {
  const [project, setProject] = useState();
  useEffect(() => {
    setProject(info);
    AOS.init();
  });

  const redirectTo = (location) => {
    window.open(location, "_blank");
  };

  return (
    <main className="main-container">
      <section className="container-main content" id="intro" tabIndex="-1">
        <div className="me-svg">
          <Me />
        </div>

        <div className="text-wrapper">
          <div className="main-text-container">
            <h1 className="notranslate" style={{ fontSize: "52px" }}>
              <Typewriter
                options={{
                  loop: false,
                  delay: 60,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, my name is Diana!")
                    .callFunction(() => {})
                    .pauseFor(900000000000)
                    .start();
                }}
              />
            </h1>
          </div>

          <p>
            I am a software engineer based in New York. I specialize in Frontend
            development and mobile development. As a software engineer, I strive
            to develop efficient and innovative solutions in order to optimize a
            user's experience and satisfaction. I enjoy learning new and
            upcoming changes in technology to enhance my skill set. I am a
            person who is well-organized, a problem solver, and an independent
            worker who pays close attention to details. I thrive in
            collaborative environments and enjoy seamlessly integrating into
            teams to bring any ideas to life!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <a
              href="https://www.linkedin.com/in/diana-ponce-1718821a2/"
              className="btn-lnk"
            >
              <FaLinkedinIn aria-label="LinkedIn Icon" />
            </a>
            <a href="https://github.com/diana2341" className="btn-lnk">
              <AiOutlineGithub aria-label="Github Icon" />
            </a>
            <a
              href="mailto: dianayponce2341@gmail.com"
              id="mail"
              className="btn-lnk"
            >
              <AiOutlineMail aria-label="Mail Icon" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <Container id="about">
          <br />
          <br />
          <br />
          <br />
          <Jumbotron id="jumbo">
            <Container>
              <h2>Languages and Tools I Use</h2>
              <br />
              <Row md={5}>
                <Col>
                  <SiCss3 aria-label="CSS Icon" /> CSS
                </Col>
                <Col>
                  <SiHtml5 aria-label="HTML Icon" /> HTML5
                </Col>
                <Col>
                  <SiJavascript aria-label="Javascript Icon" />
                  Javascript
                </Col>
                <Col>
                  <SiBootstrap aria-label="Bootstrap Icon" />
                  Boostrap
                </Col>
                <Col>
                  <SiGithub aria-label="Github Icon" />
                  Github
                </Col>
                <Col>
                  <DiRuby aria-label="Ruby Icon" />
                  Ruby
                </Col>
                <Col>
                  <SiPostgresql aria-label="Postgresql Icon" />
                  Postgresql
                </Col>
                <Col>
                  <SiReact aria-label="React Icon" />
                  React
                </Col>
                <Col>
                  <SiRedux aria-label="Redux Icon" />
                  Redux
                </Col>
                <Col>
                  <SiMysql aria-label="MySQL Icon" />
                  Mysql
                </Col>
                <Col>
                  <SiVuedotjs aria-label="Vue Icon" />
                  Vuejs
                </Col>
                <Col>
                  <SiShopify aria-label="Shopify Icon" />
                  Shopify Liquid
                </Col>
                <Col>
                  <SiNodedotjs aria-label="Node.JS Icon" />
                  Nodejs
                </Col>
                <Col>
                  <SiTypescript aria-label="Typescript Icon" />
                  Typesrcipt
                </Col>
                <Col>
                  <SiNextdotjs aria-label="Next.JS Icon" />
                  Nextjs
                </Col>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 256 256"
                    aria-label="Material UI Icon"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path d="M1,5l6,4v20l-6,-4z"></path>
                        <path d="M47,20l-6,4v13l6,-4z"></path>
                        <path d="M47,6l-6,4v7l6,-4z"></path>
                        <path d="M35,5l-6,4v20l6,-4z"></path>
                        <path d="M1,12l17,11v-7l-17,-11z"></path>
                        <path d="M35,12l-17,11v-7l17,-11z"></path>
                        <path d="M35,26l-17,11v-7l17,-11z"></path>
                        <path d="M47,34l-17,11v-7l17,-11z"></path>
                        <path d="M30,37.765l-12,-7.765v7l12,7.765z"></path>
                      </g>
                    </g>
                  </svg>
                  Material UI
                </Col>
                <Col>
                  <SiMongodb aria-label="MongoDB Icon" />
                  Mongodb
                </Col>
                <Col>
                  <SiPostman aria-label="Postman Icon" />
                  Postman
                </Col>
                <Col>
                  <SiReact aria-label="React Native Icon" />
                  React Native
                </Col>
                <Col>
                  <SiFigma aria-label="Figma Icon" />
                  Figma
                </Col>
              </Row>
            </Container>

            <br />
            <br />
            <p>
              <Button
                className="link-btn"
                onClick={() =>
                  document.getElementById("project")?.scrollIntoView(true)
                }
                variant="outline-light"
                aria-label="View Projects"
              >
                View Projects
              </Button>{" "}
              <Button
                className="link-btn"
                href="https://drive.google.com/file/d/1EtuChyRC9yk8A6GMbYpVjeLInhAsql9l/view?usp=sharing"
                variant="outline-light"
                target="_blank"
                aria-label="View Resume"
              >
                View Resume
              </Button>
            </p>
          </Jumbotron>
        </Container>
      </section>

      <section id="project">
        <div className="presentation">
          <br />
          <h2 className="title2">Projects</h2>
          <br />
          <br />
          <div className="column">
            {project?.map((info, index) => (
              <div
                key={index}
                className="card"
                data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="card-horizontal">
                  <img
                    onClick={() =>
                      redirectTo(info.deploy ? info.deploy : info.youtube)
                    }
                    className="picturep"
                    variant="top"
                    alt={`Image of ${info.name} website`}
                    src={info.main}
                  />{" "}
                  <div className="body ">
                    <div>
                      <span className="name-project">{info.name}</span>
                      <p>{`${info.description}. Tools I used include ${info.tools}`}</p>
                    </div>
                    <br />
                    <div className="external-l">
                      {info.gitLink ? (
                        <Button
                          size="sm"
                          variant="outline-light"
                          aria-label={`View ${info.name}'s source Code`}
                          href={info.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </Button>
                      ) : (
                        ""
                      )}{" "}
                      {info.youtube ? (
                        <Button
                          size="sm"
                          variant="outline-light"
                          aria-label={`View ${info.name}'s Demo Vdeo`}
                          href={info.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo Video
                        </Button>
                      ) : (
                        ""
                      )}{" "}
                      {info.deploy ? (
                        <Button
                          size="sm"
                          variant="outline-light"
                          aria-label={`View ${info.name}'s Website`}
                          href={info.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Accessibility
        aos={AOS}
        openAccess={openAccess}
        setOpenAccess={setOpenAccess}
      />
      <section id="link">
        <span id="con-me">
          // Like what you see?{" "}
          <a
            href="mailto: dianap2341@gmail.com"
            aria-label="email to contact me!"
          >
            {" "}
            Contact me!
          </a>
        </span>
        <br />
        <br />
        <br />
      </section>
      <br />
    </main>
  );
}
