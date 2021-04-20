import React from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import info from './info';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup' 
import {Button} from 'react-bootstrap' 

import ListGroupItem from 'react-bootstrap/ListGroupItem' 
import CardDeck from 'react-bootstrap/CardDeck'
import {FaGithubSquare} from'react-icons/fa'
import {HiExternalLink} from'react-icons/hi'
import {AiFillGithub} from'react-icons/ai'
import {RiYoutubeLine} from'react-icons/ri'
class Projects extends React.Component{
 state={
    project:[]

 }
 componentDidMount=()=>{
//     Aos.init({duration:2000})
    this.setState({project:info})
//     let options = {}
//     let sections=document.querySelectorAll('.box1')
//     let observer=  new IntersectionObserver(function(entries, observer){
//      entries.forEach(entry=>{
//        if(!entry.isIntersecting){
//          return
//        }
//      entry.target.classList.toggle("lis");
//        observer.unobserve(entry.target)
//     })},options)
//       sections.forEach(section=>{
//        observer.observe(section)
//       })
    }
    render(){
        return(
            <div>
                <div className='presentation'><br/>
                    <h2 className="title2">Projects</h2>
                    <CardDeck className='column'  >
                        {this.state.project.map((info,index)=> 
                        <Card key={index}className='card' >
                            <div className="card-horizontal">
                            <a href={info.deploy?info.deploy:info.youtube}>
                                
                            <Card.Img  className='picturep'variant="top"  alt='pic' src={info.main} />
                            </a> {/* data-aos="fade-left" */}
                            <Card.Body className='body '>
                            <div >
                            <Card.Title><h1 className='name-project'>{info.name}</h1></Card.Title>
                            <Card.Text >{`${info.description}. Tools I used include ${info.tools}` }</Card.Text>
                            {/* <ListGroup className="list-group-flush">
                            {info.tools.split(',').map((line,index) => <ListGroupItem key={index}className='list'> {`➤ ${line}`}</ListGroupItem> )}  </ListGroup> */}
                            </div><br/>
                            <div className='external-l'>
                            <Button size="sm"href={info.gitLink}variant="outline-light">Source Code</Button>{' '}
                            {info.youtube?<Button size="sm"href={info.youtube}variant="outline-light">Demo Video</Button>:''}
                            { info.deploy? <Button size="sm"href={info.gitLink}variant="outline-light">Live site</Button>:''}
                            </div>
                             
                            </Card.Body> 
                            </div>
                        </Card>  
                        )}
                    </CardDeck>
                </div>
            </div>
        )
    }
}
export default Projects