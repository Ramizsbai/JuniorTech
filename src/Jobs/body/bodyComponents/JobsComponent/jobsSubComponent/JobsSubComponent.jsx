import React, { Component } from 'react';
import './jobsSubComponent.css';
import logo from './icons/logo.png';

export class JobsSubComponent extends Component {
    render() {
        return (
            <div className="jobs-sub-component">
                <div className="job-post-component container-fluid d-flex mt-3 mb-3">
                  <div className="company-logo">
                    <img src={logo} alt="company-logo" className="job-company-logo" />
                  </div>
                  <div className="job-post">
                    <div className="job-post-left d-flex flex-column ml-4">
                      <span className="job-post-title">Front end developer</span>
                      <span className="job-post-company">Digital career institut</span>
                      <span className="job-post-location">Berlin</span>
                    </div>
                    <div className="job-post-right">
                       <div className="job-post-save">

                       </div>
                       <div className="job-post-skills-lights">

                       </div>
                    </div>
                  </div>
                </div>
                <hr className="job-post-line"></hr>
            </div>
        )
    }
}

export default JobsSubComponent
