import React from "react"
import './Bodytwo.css'
import Photo from './work-photo.svg'
import {Button, Container, Row } from 'reactstrap'
import './responsive-home-body-two.css'





const BodyTwo = () => {



   
    return(
        <div className = "main-div">

        <Container className='container'>
            <Row className= 'Row'>
        <div className = "title">
        <Container>
             <h1 className="display-5">A lot of Jobs. Find <br/> the One That's Right for you.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quae sapiente doloremque expedita Quae sapiente doloremque expedita 
            
            </p>
           
            
            <div className='butt'><Button className='search-job'>Search job</Button></div>
            </Container>
        </div>

       <img className='photo' src={Photo} alt="work-img"/>
        </Row>
        </Container>
        </div>
    )
}
 

export default BodyTwo