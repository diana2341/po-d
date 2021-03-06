import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Me from "../imgs/developer6.js";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { AiOutlinePlayCircle } from "react-icons/ai";
import pausedBG from "../imgs/me.svg";
import playdBG from "../imgs/bg.svg";

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
import { SiMaterialui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiFigma } from "react-icons/si";

import info from "./info";

import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
	const [project, setProject] = useState();
	useEffect(() => {
		setProject(info);
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 50,
			once: true,
		});
	});
	const [paused, setPaused] = useState(false);

	const pauseUpdate = () => {
		if (paused) {
			document.querySelector(".App").style.backgroundImage = `url(${pausedBG})`;
			setPaused(false);
			console.log("paused");
		} else {
			document.querySelector(".App").style.backgroundImage = `url(${playdBG})`;

			setPaused(true);
			console.log("play");
		}
	};
	// let returnGreeting = () => {
	// 	var today = new Date();
	// 	var curHr = today.getHours();

	// 	if (curHr < 12) {
	// 		return 'Good Morning ?????? ';
	// 	} else if (curHr < 18) {
	// 		return 'Good Afternoon ????';
	// 	} else {
	// 		return 'Good Evening ????';
	// 	}
	// };
	const showPausebtn = () => {
		document.querySelector(".pause-play").style.display = "block";
		document.querySelector(".placeholder").style.display = "none";
	};

	return (
		<>
			<div className="container-main" id="intro">
				<div className="me-svg">
					<Me />
				</div>

				<div className="text-wrapper">
					{/* <h1>{returnGreeting()} Visitor!</h1><br/> */}

					<div className="main-text-container">
						<h1 className="notranslate">
							{/* <Typewriter
								options={{
									strings: ['Hi, my name is <b>Diana!</b>'],
									autoStart: true,
									loop: false,
									delay: 60,
									pauseFor: 900000000000,
								}}
							/> */}
							<Typewriter
								options={{
									loop: false,
									delay: 60,
								}}
								onInit={(typewriter) => {
									typewriter
										.typeString("Hi, my name is <b>Diana!</b>")
										.callFunction(() => {
											setInterval(showPausebtn, 600);
										})
										.pauseFor(900000000000)
										.start();
								}}
							/>
						</h1>
						<div className="placeholder" style={{ opacity: "0" }}>
							{paused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
						</div>
						<h2 className="pause-play" onClick={pauseUpdate}>
							{paused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
						</h2>
					</div>

					<p>
						I am a software engineer based in New York . I specialize in Frontend development and
						mobile development. As a software engineer, I strive to develop efficient and innovative
						solutions in order to optimize a user's experience and satisfaction. I enjoy learning
						new and upcoming changes in technology to enhance my skill set. I am a person who is
						well-organized, a problem solver, and an independent worker who pays close attention to
						details. While I have worked with many technologies my main tech stack is in React.js,
						React native, and liquid!
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "30px",
						}}
					>
						<h1 className="btn-lnk">
							<a href="https://www.linkedin.com/in/diana-ponce-1718821a2/">
								<FaLinkedinIn />
							</a>
						</h1>
						<h1 className="btn-lnk">
							<a href="https://github.com/diana2341">
								<AiOutlineGithub />
							</a>
						</h1>
						<h1 className="btn-lnk">
							<a href="https://www.instagram.com/diana.poncee/">
								<AiOutlineInstagram />
							</a>
						</h1>

						<h1 id="mail" className="btn-lnk">
							<a href="mailto: dianaponce2341@gmail.com">
								<AiOutlineMail />
							</a>
						</h1>
					</div>
				</div>
			</div>

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
								<h1>
									<SiCss3 />{" "}
								</h1>
								CSS
							</Col>
							<Col>
								<h1>
									<SiHtml5 />{" "}
								</h1>
								HTML5
							</Col>
							<Col>
								<h1>
									<SiJavascript />
								</h1>
								Javascript
							</Col>
							<Col>
								<h1>
									<SiBootstrap />
								</h1>
								Boostrap
							</Col>
							<Col>
								<h1>
									<SiGithub />
								</h1>
								Github
							</Col>
							<Col>
								<h1>
									<DiRuby />
								</h1>
								Ruby
							</Col>
							<Col>
								<h1>
									<SiPostgresql />
								</h1>
								Postgresql
							</Col>
							<Col>
								<h1>
									<SiReact />
								</h1>
								React
							</Col>
							<Col>
								<h1>
									<SiRedux />
								</h1>
								Redux
							</Col>
							<Col>
								<h1>
									<SiMysql />
								</h1>
								Mysql
							</Col>
							<Col>
								<h1>
									<SiVuedotjs />
								</h1>
								Vuejs
							</Col>
							<Col>
								<h1>
									<SiShopify />
								</h1>
								Shopify Liquid
							</Col>
							<Col>
								<h1>
									<SiNodedotjs />
								</h1>{" "}
								Nodejs
							</Col>
							<Col>
								<h1>
									<SiTypescript />
								</h1>
								Typesrcipt
							</Col>
							<Col>
								<h1>
									<SiNextdotjs />
								</h1>
								Nextjs
							</Col>
							<Col>
								<h1>
									<SiMaterialui />
								</h1>
								Material UI
							</Col>
							<Col>
								<h1>
									<SiMongodb />
								</h1>
								Mongodb
							</Col>
							<Col>
								<h1>
									<SiPostman />
								</h1>
								Postman
							</Col>
							<Col>
								<h1>
									<SiReact />
								</h1>
								React Native
							</Col>
							<Col>
								<h1>
									<SiFigma />
								</h1>
								Figma
							</Col>
						</Row>
					</Container>
					<br />
					<br />
					<p>
						<Button
							className="link-btn"
							onClick={() => document.getElementById("project")?.scrollIntoView(true)}
							variant="outline-light"
						>
							View Projects
						</Button>{" "}
						<Button
							className="link-btn"
							href="https://drive.google.com/file/d/1S_cf6LC3jvYhP-PN50vionoevgG3sRKT/view?usp=sharing"
							variant="outline-light"
							target="_blank"
						>
							View Resume
						</Button>
					</p>
				</Jumbotron>
			</Container>

			<div id="project">
				<div className="presentation">
					<br />
					<h2 className="title2">Projects</h2>
					<br />
					<br />
					<div className="column">
						{project?.map((info, index) => (
							<div key={index} className="card" data-aos="zoom-in">
								<div className="card-horizontal">
									<a href={info.deploy ? info.deploy : info.youtube}>
										<img className="picturep" variant="top" alt="pic" src={info.main} />
									</a>{" "}
									{/* data-aos="fade-left" */}
									<div className="body ">
										<div>
											<h1 className="name-project">{info.name}</h1>
											<p>{`${info.description}. Tools I used include ${info.tools}`}</p>
											{/* <ListGroup className="list-group-flush">
                            {info.tools.split(',').map((line,index) => <ListGroupItem key={index}className='list'> {`??? ${line}`}</ListGroupItem> )}  </ListGroup> */}
										</div>
										<br />
										<div className="external-l">
											{info.gitLink ? (
												<Button size="sm" href={info.gitLink} variant="outline-light">
													Source Code
												</Button>
											) : (
												""
											)}{" "}
											{info.youtube ? (
												<Button size="sm" href={info.youtube} variant="outline-light">
													Demo Video
												</Button>
											) : (
												""
											)}{" "}
											{info.deploy ? (
												<Button size="sm" href={info.deploy} variant="outline-light">
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
				<div id="link">
					<h4 id="con-me">
						// Like what you see? <a href="mailto: dianap2341@gmail.com"> Contact me!</a>
					</h4>
					<br />
					<br />
					<br />
				</div>
				<br />
			</div>
		</>
	);
}
