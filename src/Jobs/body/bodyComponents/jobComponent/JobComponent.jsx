import React, { Component } from 'react';
import './jobComponent.css';
import JobSubComponent from './jobSubComponent/JobSubComponent';

class JobComponent extends Component {


  render() {
    let users = this.props.users
    return (
      <div>
        {
          users.map((user) => (

            <JobSubComponent id={user.id} name={user.name} key={user.id} email={user.email} city={user.address.city} />

          ))
        }
      </div>

    )
  }


}

export default JobComponent
