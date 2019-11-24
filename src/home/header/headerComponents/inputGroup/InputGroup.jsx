import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './inputGroup.css';

export class InputGroup extends Component {
    render() {
        return (
            <div>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <Label for="exampleSearch" className="mr-sm-2"></Label>
                   <Input type="search" name="search" id="exampleSearch" placeholder="Keywords" className="inputGroup" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleSelect" className="mr-sm-2"></Label>
                  <Input type="select" name="select" id="exampleSelect" placeholder="City" className="inputGroup">
                    <option>All City</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <Button>Submit</Button>
               </Form>
            </div>
        )
    }
}

export default InputGroup
