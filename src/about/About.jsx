import React, { Component } from 'react'
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import '../responsive/responsive.css';

export class About extends Component {
    render() {
        return (
            <div>

               
                <Header />
                <Body />
                <Footer />

            </div>
        )
    }
}

export default About;
