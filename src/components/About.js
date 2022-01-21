import React from 'react'
import {Jumbotron,Button,Row,Col,Container} from 'react-bootstrap'
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';

import { SiGithub } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
// SiVuedotjs SiShopify SiNodedotjs SiTypescript SiNextdotjs
import { SiVuedotjs } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript  } from "react-icons/si"
import { SiNextdotjs  } from "react-icons/si";
import { SiMaterialui  } from "react-icons/si";
import { SiMongodb  } from "react-icons/si";
import { SiPostman  } from "react-icons/si";


export default function About(){
 let returnGreeting=()=>{
    var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  return 'Good Morning ☀️ '
} else if (curHr < 18) {
  return 'Good Afternoon 🌤'
} else {
  return 'Good Evening 🌙'
}
  }
    return(
      <Container><br/><br/><br/><br/>
<Jumbotron id='jumbo'>
  <h1>{returnGreeting()} Visitor!</h1><br/>
  <p>
  My name is Diana Ponce and I'm a software developer based in New York .
  As a software engineer, I strive to develop efficient and innovative solutions in order to optimize a user's experience and satisfaction. I enjoy learning new and upcoming changes in technology to enhance my skill set.
  </p>

  <Container>
    <h2>Languages and Tools I Use</h2><br/>
  <Row md={5}>
    <Col><h1><SiCss3/> </h1>CSS</Col>
    <Col ><h1><SiHtml5/> </h1>HTML5</Col>
    <Col><h1><SiJavascript/></h1>Javascript</Col>
    <Col><h1><SiBootstrap/></h1>Boostrap</Col>
    <Col><h1><SiGithub/></h1>Github</Col>
    <Col><h1><DiRuby/></h1>Ruby</Col>
    <Col><h1><SiPostgresql/></h1>Postgresql</Col>
    <Col><h1><SiReact/></h1>React</Col>
    <Col><h1><SiRedux/></h1>Redux</Col>
    <Col><h1><SiMysql/></h1>Mysql</Col>
    <Col><h1><SiVuedotjs/></h1>Vuejs</Col>
    <Col><h1><SiShopify/></h1>Shopify Liquid</Col>
    <Col><h1><SiNodedotjs/></h1> Nodejs</Col>
    <Col><h1><SiTypescript/></h1>Typesrcipt</Col>
    <Col><h1><SiNextdotjs/></h1>Nextjs</Col>
    <Col><h1><SiMaterialui/></h1>Material UI</Col>
    <Col><h1><SiMongodb/></h1>Mongobd</Col>
    <Col><h1><SiPostman/></h1>Postman</Col>




  </Row>
</Container><br/><br/>
  <p>
    <Button className='link-btn'href='/projects' variant="outline-info">View Projects</Button>{' '}
    <Button className='link-btn'href='https://drive.google.com/file/d/1cE7B3xX_GA65B0jAOD-HtngRrC7tHPXI/view?usp=sharing' variant="outline-info">View Resume</Button>

  </p>
</Jumbotron>
</Container> 

   )
} 