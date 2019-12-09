import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './filter.css';
import { Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';

const Filter = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


  return (
    <div id="filter">
      <Container>
        <Row>
          <Col>
            <div>
              <InputGroup>
                <Input placeholder="skills" />
                <div className="add-Button"><Button  color="primary">Add</Button>{' '}</div>

                <InputGroupAddon addonType="append">
                             
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Col>
          <Col>
            <div className='skillJob'>
              <Button id='firtsButtonFilter' color="muted text-white">Html</Button>{' '}
              <Button id='secondButtonFilter' color="muted text-white">CSS</Button>{' '}
              <Button id='thirdButtonFilter'color="muted text-white">JavaScript</Button>{' '}
            </div></Col>
          <Col>
          {/* ---------------------------- */}
            <div class="JobTypeAndCategory">
              <div class="ButtonDropdownJobType">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="muted" className="block-example border border-muted" caret>
                  Job type
                </DropdownToggle  >
                <DropdownMenu  >
                  <DropdownItem >Job type 1</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Job type2</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              </div>
              <div>
                  <div className="DropdownToggleCategory">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle color="muted" className="block-example border border-muted" caret>
                Category
          </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Category 1</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Category 2</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

          

          </div>
              </div>
            </div>
          </Col>
        
          <Col>
            <div className="SaveButton">
              <Button color="muted text-white" >Save</Button>{' '}
            </div>
          </Col>
          
        </Row>

      </Container>

    </div>
  );
}

export default Filter;
