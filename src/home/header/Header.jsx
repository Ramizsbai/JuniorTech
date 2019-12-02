import React, { Component } from 'react';
import "./header.css";
import InputGroup from './headerComponents/inputGroup/InputGroup';
import Title from './headerComponents/title/Title';

class Header extends Component {
    render() {
        return (
            <div className="mainHeader">
                <div className="mainHeader2 mb-5">
                  <Title />
                  <InputGroup />
                </div>
              
            </div>            
           
        )
    }
}

export default Header
