import React from 'react'
import {Container, Figure,Button} from 'react-bootstrap'
import me from '../imgs/mee.png'
import TextTransition, { presets } from "react-text-transition";

export default function Home(){

const TEXTS = [
    "Frontend Developer",
    "Full-stack Developer",
    "Software engineer",
    "Web Developer"
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    return(
        <div className='container'>
        <Figure  className='me'>
            <Figure.Image
                width={170}
                height={180}
                src={me}
                roundedCircle
            />
            <Figure.Caption>
                <h2>Hi my name is Diana</h2>
                <h3 id='jobs'>
                 <TextTransition
                    text={ `➤ A ${ TEXTS[index % TEXTS.length] }`}
                    springConfig={ presets.wobbly }
                 />
                 </h3><br/>
                 <Button variant="outline-secondary">Primary</Button>{' '}

         </Figure.Caption>
        </Figure>
        </div>
    )
} 







