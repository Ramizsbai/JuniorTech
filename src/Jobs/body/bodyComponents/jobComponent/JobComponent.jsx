import React, { Component } from 'react';
import './jobComponent.css';
import JobSubComponent from './jobSubComponent/JobSubComponent';

class JobComponent extends Component {


  render() {
    let jobs = this.props.jobs
    return (
      <div>
        {
          jobs.map((job) => (

            <JobSubComponent id={job.id} title={job.title} key={job.id} company={job.employer.name} city={job.locations.data.city} />

          ))
        }
      </div>

    )
  }


}

export default JobComponent
