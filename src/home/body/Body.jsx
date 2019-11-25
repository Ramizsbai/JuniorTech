import React, { Component } from 'react';
import BodyOne from './bodyComponents/BodyOneComponent/BodyOne';
import BodyTwo from './bodyComponents/BodyTwoComponent/BodyTwo';
import './body.css';
export class Body extends Component {
    render() {
        return (
            <div className="homeBody">
                <BodyOne />
                <BodyTwo />
            </div>
        )
    }
}

export default Body
