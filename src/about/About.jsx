import React, { Component } from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import '../responsive/responsive.css';
import Intro from './body/bodyComponents/introduction/Intro';
import Profiles from './body/bodyComponents/profiles/Profiles';


export class About extends Component {
    render() {
        return (
            <div>


                <Header />
                <Intro />
                <Profiles />
                <Footer />

            </div>
        )
    }
}

export default About;
