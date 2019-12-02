import React, { Component } from 'react'
import './Body.css'
import DesComponent from './bodyComponents/DesComponent/DesComponent'
import JobsComponent from './bodyComponents/JobsComponent/JobsComponent'



export class BodyComponent extends Component {
    render() {
        return (
            <div className= 'mainBody'>
                <JobsComponent />
                <DesComponent />
              
            </div>
        )
    }
}

export default BodyComponent
