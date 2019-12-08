import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './inputGroup.css';
import './responsive-home-header-input.css';

export class InputGroup extends Component {
    render() {
        return (
            <div className="input-group mt-4">
                <Form className="d-flex justify-content-center header-input">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ml-3">
                        <Input type="search" name="search" id="exampleSearch1" placeholder="Keyword" className="inputGroup" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ml-3">
                        <Input type="search" name="search" id="exampleSearch2" placeholder="City" className="inputGroup" />
                    </FormGroup>
                    <div className="searchButton"> <Button className="border-teal ml-3">Submit</Button></div>
                </Form>
            </div>
        )
    }
}

export default InputGroup
