import React, { Component } from 'react';
import Header from './header/Header';

import Filter from './body/filterComponent/filter'

export class Jobs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Filter />
            </div>
        )
    }
}

export default Jobs
