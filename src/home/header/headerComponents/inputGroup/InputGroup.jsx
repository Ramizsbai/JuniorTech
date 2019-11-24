import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './inputGroup.css';

export class InputGroup extends Component {
    render() {
        return (
            <div>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <Input type="search" name="search" id="exampleSearch" placeholder="Keywords" className="inputGroup" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <Input type="search" name="search" id="exampleSearch2" placeholder="City" className="inputGroup" />
                </FormGroup>
                <Button>Submit</Button>
               </Form>
            </div>
        )
    }
}

export default InputGroup
