import React, { useState } from 'react';
import {Card,Accordion,Button,Form,Container,Row,Col,Alert} from 'react-bootstrap'
import {HiOutlineMail} from'react-icons/hi'
import {HiOutlineMailOpen} from'react-icons/hi'
import {SiLinkedin} from'react-icons/si'
import {SiGithub} from'react-icons/si'




export default class Contact extends React.Component{
    state={
        feedback: '',
        name: '', 
        email: '' ,
        closed:false,
        show:false
    }
    handleChange=(event) =>{
    const{name,value}=event.target
    this.setState({[name]:value})
    }

    handleSubmit= (e)=>{
      e.preventDefault();
      const templateId = "template_OSnwlhmv";;
      this.setState({name:'',feedback:'',email:''})
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      console.log('sent')
      this.setState({show:true})

    }

    sendFeedback= (templateId, variables) =>{
      window.emailjs.send(
        'gmail', templateId,
        variables).then(res => {
            console.log('Email successfully sent!')
        })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    render(){return(
        <Container className='col-contact'><br/>
        

            <span className='bye'><h2>Thank You For Visiting My Portfolio ! <span className='wave'>👋</span></h2><br/>
<h3>I hope you enjoyed looking around Im always learning new technologies and making new projects. You can always come back to check out new content!
You can contact me through email by clicking the mail icon Or you contact me through LinkedIn and checkout my GitHub.</h3></span><br/><br/>
            
            <Row>
            <Col>
                    <h1 className='btn-lnk'><a href='https://www.linkedin.com/in/diana-ponce-1718821a2/'><SiLinkedin/></a></h1>
                </Col>
                <Col>
                  <h1 className='btn-lnk'><a href='https://github.com/diana2341'><SiGithub/></a></h1>
                
                </Col>
                <Col>
                <Accordion>
                    <Card className='card-l'>
                        <Card.Header className='accor-card'>
                        <Accordion.Toggle actvive ={false}className='b-link'as={Button} variant="link" eventKey="0">
                        <h1 id={`${this.state.closed?'':'mail'}`}onClick={()=>this.setState({closed:!this.state.closed})}>{this.state.closed?< HiOutlineMailOpen/>:<HiOutlineMail />}</h1> 
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Form className='form' onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicName">
                        <Form.Control name='name'type="name" placeholder="Name"     required
                onChange={this.handleChange}
                value={this.state.name}/>
                    
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control required name='email'type="email" placeholder="Email"   onChange={this.handleChange}
                value={this.state.email}/>
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage.textarea">
                        <Form.Control name='feedback'required as="textarea" rows={3} placeholder="Message" onChange={this.handleChange}
                value={this.state.feedback}/>
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
            </Row><br/><br/>
            {this.state.show&&
      <Alert variant="light" onClose={() => this.setState({show:false})} dismissible>
        <Alert.Heading>Message sent!</Alert.Heading>
      </Alert>
    
  }
        </Container>
    )
    }
} 