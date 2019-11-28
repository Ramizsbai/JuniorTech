import React, { Component } from 'react';
import './jobsComponent.css'
import JobsSubComponent from './jobsSubComponent/JobsSubComponent';

export class Jobs extends Component {
    render() {
        return (
            <div className="jobs-container">
                <JobsSubComponent />
            </div>
        )
    }
}

export default Jobs
