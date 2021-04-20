import React from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import info from './info';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup' 
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
                <div className='presentation'>
                    <h2 className="title2">Projects</h2>
                    <CardDeck className='column'  >
                        {this.state.project.map((info,index)=> 
                        <Card key={index}className='card' >
                            {/* data-aos="fade-right" */}
                            <a href={info.deploy?info.deploy:info.youtube}>
                            <Card.Img  className='picturep'variant="top"  alt='pic' src={info.main} />
                            </a> {/* data-aos="fade-left" */}
                            <Card.Body className='body'>
                            <div >
                            <Card.Title><h1 className='name-project'>{info.name}</h1></Card.Title>
                            <Card.Text >{info.description}</Card.Text>
                            <ListGroup className="list-group-flush">
                            {info.tools.split(',').map((line,index) => <ListGroupItem key={index}className='list'> {line}</ListGroupItem> )}  </ListGroup>
                            </div>
                            <div className='external-l'>
                            <a className='e-l'href={info.gitLink}><AiFillGithub size={25}/></a>
                            {info.youtube?<a className='e-l'href={info.youtube}><RiYoutubeLine size={25}/></a>:''}
                            { info.deploy?<a className='e-l'href={info.deploy}><HiExternalLink size={25}/></a>:''}
                            </div>
                            </Card.Body>  
                        </Card>  
                        )}
                    </CardDeck>
                </div>
            </div>
        )
    }
}
export default Projects