import React, { Component } from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Filter from './filter/Filter';


export class Jobs extends Component {

    render() {
        return (
            <div>
                <Header />
                <Filter />
                <Body />
            </div>
        )
    }
}

export default Jobs;
