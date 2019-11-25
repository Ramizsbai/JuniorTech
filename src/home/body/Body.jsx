import React, { Component } from 'react';
import BodyOne from './bodyComponents/BodyOneComponent/BodyOne';
import BodyTwo from './bodyComponents/BodyTwoComponent/BodyTwo';
export class Body extends Component {
    render() {
        return (
            <div>
                <BodyOne />
                <BodyTwo />
            </div>
        )
    }
}

export default Body
