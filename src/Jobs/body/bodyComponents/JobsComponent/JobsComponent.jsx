import React, { Component } from 'react';
import './jobsComponent.css'
import JobsSubComponent from './jobsSubComponent/JobsSubComponent';
import DesComponent from './DesComponent/DesComponent';

export class Jobs extends Component {
    
        state = {
         users: [],
         description: [],
        }
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({users : data})
            console.log(this.state)
        })
        .catch(console.log);
        
    }

     render() {
        const descriptionData = (desData) =>{
            this.setState({description: desData}) 
            console.log(this.state.description)
        }
        return (
            <div className="jobs-body-container">
            <div className="jobs-container" id="style-1">
                <JobsSubComponent users={this.state.users} descriptionData={ descriptionData } />
            </div>
                <DesComponent description={this.state.description} />
            </div>
        )
    }
}

export default Jobs
