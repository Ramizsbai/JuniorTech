import React, { Component } from 'react'
import DesSubComponent from './DesSubComponent/DesSubComponent'
import './Des.css'

export class DesComponent extends Component {
    render() {
        return (
            <div className = 'mainDes'>
                <DesSubComponent />
            </div>
        )
    }
}

export default DesComponent
