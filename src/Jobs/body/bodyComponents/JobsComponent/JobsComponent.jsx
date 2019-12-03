import React, { Component } from 'react';
import './jobsComponent.css'
import JobsSubComponent from './jobsSubComponent/JobsSubComponent';
import DesComponent from './DesComponent/DesComponent';

export class Jobs extends Component {
    
        state = {
         users: [],
        }
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({users : data})
            console.log(this.state)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div className="jobs-body-container">
            <div className="jobs-container" id="style-1">
                <JobsSubComponent users={this.state.users} />
            </div>
            <DesComponent />
            </div>
        )
    }
}

export default Jobs
