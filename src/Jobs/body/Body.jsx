import React, { Component } from 'react'
import './Body.css'
import JobsComponent from './bodyComponents/JobsComponent/JobsComponent'



export class BodyComponent extends Component {
    render() {
        return (
            <div className= 'mainBody'>
                <JobsComponent />              
            </div>
        )
    }
}

export default BodyComponent
