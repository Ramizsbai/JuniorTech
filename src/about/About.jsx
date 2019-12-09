import React, { Component } from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import '../responsive/responsive.css';
import Intro from './body/bodyComponents/introduction/Intro';


export class About extends Component {
    render() {
        return (
            <div>


                <Header />
                <Intro />
                <Footer />

            </div>
        )
    }
}

export default About;
