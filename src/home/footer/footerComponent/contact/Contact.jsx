import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './contact.css';
const Example = (props) => {
  return (

    <div className="contact-body">

      <Container>
        <Row >
          <Col>
            <h4>Contact</h4>
            <p> This content is a little bit longer.</p>
          </Col>
          <Col>
            <h4>About</h4>
            <p>in to additional content.</p>
          </Col>
          <Col>
            <h4>Tamim</h4>
            <p>Tshow that equal height action.</p>
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default Example;