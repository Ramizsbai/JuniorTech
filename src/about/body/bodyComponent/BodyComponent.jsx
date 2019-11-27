
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Example = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="" alt="Card image cap" />
                <CardBody className="flex-row">
                    <CardTitle>{this.props.person.name}</CardTitle>
                    <CardSubtitle>{this.props.person.company}</CardSubtitle>
                    <CardText>{this.props.person.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}


export default Example;