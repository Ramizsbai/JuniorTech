import React, { Component } from 'react';
import './jobsSubComponent.css';

export class JobsSubComponent extends Component {
    render() {
        return (
            <div className="jobs-sub-component">
                <div className="container-fluid">
                  <div className="company-logo">

                  </div>
                  <div className="job-post">
                    <div className="job-post-left">
                      <p className="job-post-title">Front end developer</p>
                      <p className="job-post-company">Digital career institut</p>
                      <p className="job-post-location">Berlin</p>
                    </div>
                    <div className="job-post-right">
                       <div className="job-post-save">

                       </div>
                       <div className="job-post-skills-lights">

                       </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default JobsSubComponent
