import React, { Component } from 'react'
import './Body.css'
import DesComponent from './BodyComponents/DesComponent/DesComponent'


export class BodyComponent extends Component {
    render() {
        return (
            <div className= 'mainBody'>
               
                <DesComponent />
              
            </div>
        )
    }
}

export default BodyComponent
