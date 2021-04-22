import React, { useState } from 'react';
import {Card,Accordion,Button,Form,Container,Row,Col} from 'react-bootstrap'
import {HiOutlineMail} from'react-icons/hi'
import {HiOutlineMailOpen} from'react-icons/hi'
import {SiLinkedin} from'react-icons/si'
import {SiGithub} from'react-icons/si'




export default function Contact(){
    const [closed, setClosed] = useState(false);

    return(
        <Container className='col-contact'>
            <span className='bye'><h2>Thank You For Visiting My Portfolio ! <span className='wave'>👋</span></h2><br/>
<h3>I hope you enjoyed looking around Im always learning new technologies and making new projects. You can always come back to check out new content!
You can contact me through email by clicking the mail icon Or you contact me through LinkedIn and checkout my GitHub.</h3></span><br/><br/>
            
            <Row>
            <Col>
                    <h1 className='btn-lnk'><SiLinkedin/></h1>
                </Col>
                <Col>
                  <h1 className='btn-lnk'><SiGithub/></h1>
                
                </Col>
                <Col>
                <Accordion defaultActiveKey="0">
                    <Card className='card-l'>
                        <Card.Header className='accor-card'>
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
                    
                    <Button id='sub-btn'variant="outline-light" type="submit">
                        Submit
                    </Button>
                    </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
} 