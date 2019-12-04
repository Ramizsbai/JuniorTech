import React, { Component } from 'react'
import './Body.css'
import DesComponent from './bodyComponents/DesComponent/DesComponent'
import JobComponent from './bodyComponents/jobComponent/JobComponent'



export class BodyComponent extends Component {
    state={
        description: null,
    }
    
    handleClick= this.handleClick.bind(this)

    handleClick(data){
       
       
        console.log(data)
    }
    render() {
        return (
            <div className= 'mainBody'>
            <div className="jobs-body-container">
            <div className="jobs-container" id="style-1">
                <JobComponent description={this.handleClick} />
            </div>
                <DesComponent />
            </div>
            </div>
        )
    }
}

export default BodyComponent
