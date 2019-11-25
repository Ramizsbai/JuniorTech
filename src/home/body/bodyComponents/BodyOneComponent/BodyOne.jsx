import React from 'react'
import './bodyone.css'
import icon1 from './icons1.png'
import icon2 from './icons2.png'
import icon3 from './icons3.png'
import icon4 from './icons4.png'
import icon5 from './icons5.png'
import icon6 from './icons6.png'
import { Media, Button, Container, Row } from 'reactstrap'


const BodyOne = () => {
  return (

    
    <div className='media-object'>
 
    <div className='header'><h2>Browse Jobs By Specialisms</h2></div>

      <div className= 'media'>


        <div className= 'media-content'>
    <Container>
    <Row>
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon1} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
          Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>   
   
    

   
    <Media>
      <Media left href="#">
        <Media object className = 'icon2'src={icon2} alt="icon" />
      </Media>
      <Media body className= 'para'>
        <Media className='heading' heading>
        Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>
 


  
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon3} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
          Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>
    </Row>


  
  
    <Row>
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon4} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
          Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>
   

   
    <Media>
      <Media left href="#">
        <Media object className = 'icon2'src={icon5} alt="icon" />
      </Media>
      <Media body className= 'para'>
        <Media className='heading' heading>
        Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>
   

 
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon6} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
          Employee
        </Media>
            ingilla. Donec lacinia congue felis in faucibus. <br></br>felis in faucibus.
      </Media>
    </Media>
    </Row>

   
  
  
    <div className= 'button' ><Button>Search Job</Button>{''}</div> 
  
    </Container>
    </div>
    </div>
</div>

    
  );
};





export default BodyOne;