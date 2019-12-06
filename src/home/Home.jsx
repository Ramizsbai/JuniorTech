import React, { Component } from 'react';
import Header from './header/Header';
import './home.css';
import Body from './body/Body';
import Footer from './footer/Footer';



 class Home extends Component {
    render() {
        return (
            <div className="bg-image">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Home
