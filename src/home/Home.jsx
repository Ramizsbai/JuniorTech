import React, { Component } from 'react';
import Header from './header/Header';
import './home.css';
import Body from './body/Body';



export class Home extends Component {
    render() {
        return (
            <div className="bg-image">
                <Header />
              <Body />

            </div>
        )
    }
}

export default Home
