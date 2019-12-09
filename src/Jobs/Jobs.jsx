import React, { Component } from 'react';
import Header from './header/Header';
import Body from './body/Body'


export class Jobs extends Component {

    render() {
        return (
            <div>
                <Header />
                <Body />                
            </div>
        )
    }
}

export default Jobs;
