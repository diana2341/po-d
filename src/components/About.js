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
      <Container><br/>
<Jumbotron id='jumbo'>
  <h1>{returnGreeting()} Visitor!</h1><br/>
  <p>
  My name is Diana Ponce and I'm a software developer based in New York .
  As a software engineer, I strive to develop efficient and innovative solutions in order to optimize a user's experience and satisfaction. I enjoy learning new and upcoming changes in technology to enhance my skill set.
  </p>

  <Container>
    <h2>Languages and Tools I Use</h2><br/>
  <Row md={5}>
    <Col><h1><SiCss3/></h1></Col>
    <Col ><h1><SiHtml5/></h1></Col>
    <Col><h1><SiJavascript/></h1></Col>
    <Col><h1><SiBootstrap/></h1></Col>
    <Col><h1><SiGithub/></h1></Col>
    <Col><h1><DiRuby/></h1></Col>
    <Col><h1><SiPostgresql/></h1></Col>
    <Col><h1><SiReact/></h1></Col>
    <Col><h1><SiRedux/></h1></Col>
    <Col><h1><SiMysql/></h1></Col>


  </Row>
</Container><br/><br/>
  <p>
    <Button href='/projects' variant="outline-info">View Projects</Button>{' '}
    <Button href='https://drive.google.com/file/d/1MdqbHYKrEthgH0A5017wC_SOvkqMF3ns/view?usp=sharing' variant="outline-info">View Resume</Button>

  </p>
</Jumbotron>
</Container> 

   )
} 