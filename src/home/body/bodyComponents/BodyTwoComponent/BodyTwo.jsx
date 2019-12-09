import React from "react"
import './Bodytwo.css'
import Photo from './work-photo.svg'
import {Button, Container, Row } from 'reactstrap'





const BodyTwo = () => {



   
    return(
        <div className = "main-div">

        <Container className='container'>
            <Row className= 'Row'>
        <div className = "title">
        <Container>
             <h1 className="display-5">A lot of Jobs. Find <br/> the One That's Right for you.</h1>
            <p>Get the Tech job that you deserve, more than +1000 job offers in a junior position all around Germany apply now! .
                
            
            </p>
           
            
            <div className= 'butt'><Button>Search job</Button></div>
            </Container>
        </div>

        <img className= 'photo' src={Photo} alt="work-img"/>
      
        </Row>
        </Container>
        </div>
    )
}
 

export default BodyTwo