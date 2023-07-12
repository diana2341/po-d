import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
export default class Footer extends React.Component {
    render(){
        return(
            <footer  className='footer'>
                <Container>
                    <Row className='mx-auto'>  
                        <Col>© Copyright {new Date().getFullYear()}    |     © {new Date().getFullYear()} - Created and designed with 💓 by Diana Ponce</Col>
                    </Row>  
                </Container>
          </footer>
        )
    }
}