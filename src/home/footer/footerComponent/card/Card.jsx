import React from 'react';
import { Card, Button, CardBody, } from 'reactstrap';
import './card.css';

const Example = (props) => {
    return (
        <div>
            <Card className="mx-5 ">
                <div className="footer-card mx-5">
                    <CardBody className="footer-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
             </CardBody>
                    <Button color="success" className="footer-button my-auto">Contact Us</Button>
                </div>
            </Card>



        </div>
    );
};

export default Example;