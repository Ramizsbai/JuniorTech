import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import './home.css';




class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Home
