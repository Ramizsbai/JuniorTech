import React, { Component } from 'react';
import "./header.css";
import InputGroup from './inputGroup/InputGroup';
import Title from './title/Title';

class Header extends Component {
    render() {
        return (
            <div>
               <Title />
               <InputGroup />
            </div>            
           
        )
    }
}

export default Header
