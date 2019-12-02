import React from 'react';
import { Button, Row, CardText, Card, Container, Col,  } from 'reactstrap';
import './card.css';

const Example = (props) => {
    return (
    <div>
         <div className="home-footer" >
           
         
           <div className= 'cardFooter'>

         <container-fluid >
        <Row >
        <Card body outline style={{ backgroundColor: 'none', borderColor: '#fff' }}>
            <Row style={{padding: '10px'}}>
          <CardText className='md-6' style={{paddingRight: '10px'}}>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button >Go somewhere</Button>
          </Row>
        </Card>
         </Row>
         </container-fluid>
         </div>
    

        
         <div className="bodyFooter">
<Container>
  <Row>
    <Col>
      <h5>Contact</h5>
      <p> This content is a little </p>
      <p> This content is a little </p>
      <p> This content is a little </p>
    </Col>
    <Col>
      <h5>About</h5>
      <p>in to additional content.</p>
      <p>in to additional content.</p>
      <p>in to additional content.</p>
    </Col>
    <Col>
      <h5>Tamim</h5>
      <p>Tshow that equal height</p>
      <p>Tshow that equal height </p>
      <p>Tshow that equal height </p>
    </Col>
  </Row>
</Container>
</div>




        </div> 


        </div>
   
    );
};

export default Example;


 


