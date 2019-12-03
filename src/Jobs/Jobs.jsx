import React, { Component } from 'react';
import Header from './header/Header';
import JobsComponent from './body/bodyComponents/JobsComponent/JobsComponent'


export class Jobs extends Component {
    render() {
        return (
            <div>
                <Header />
                <JobsComponent />
            </div>
        )
    }
}

export default Jobs;
