import React, { useState } from 'react';
import {Card,Accordion,Button,Form} from 'react-bootstrap'
import {HiOutlineMail} from'react-icons/hi'
import {HiOutlineMailOpen} from'react-icons/hi'


export default function Contact(){
    const [closed, setClosed] = useState(false);

    return(
        <Accordion defaultActiveKey="0">
            <h3>Contact</h3>
  <Card>
    <Card.Header>
      <Accordion.Toggle actvive ={false}className='b-link'as={Button} variant="link" eventKey="0">
       <h1 onClick={()=>setClosed(!closed)}>{closed?<HiOutlineMail/>:<HiOutlineMailOpen />}</h1> 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Form className='form'>
      <Form.Group controlId="formBasicName">
    <Form.Control type="name" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
} 