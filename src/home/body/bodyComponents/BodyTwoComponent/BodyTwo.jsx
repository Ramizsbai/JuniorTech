import React from "react";
import './bodytwo.css';
import './responsive-home-body-two.css'
import Photo from './work.svg';
import {Button, Container, Row } from 'reactstrap';

const BodyTwo = () => {
    return(
        <div className = "main-div">
        <Container className='container'>
            <Row className= 'Row'>
        <div className = "title">
        <Container>
             <p className="body-two-text">Find the right job</p>
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
 

export default BodyTwo;