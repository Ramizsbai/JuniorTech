import React, { Component } from 'react';
import Header from './header/Header';
import BodyComponent from './body/Body'

export class Jobs extends Component {
    render() {
        return (
            <div>
                <Header />
                <BodyComponent />
            </div>
        )
    }
}

export default Jobs
