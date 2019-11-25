import React, { Component } from 'react';
import Header from './header/headerComponents/Header';
import Body from './body/Body'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}

export default Home
