import React, { Component } from 'react'
import Header from './header/Header';
import '../responsive/responsive.css';
import Body from './body/bodyComponents/body/Body';


export class About extends Component {
    render() {
        return (
            <div>


                <Header />
                <Body />
            </div>
        )
    }
}

export default About;
