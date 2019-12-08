import React, { Component } from 'react';
import './title.css';
import './responsive-home-header-title.css';

export class Title extends Component {
    render() {
        return (
            <div className="headerTitle">
                <p className="first-header text-center">Your <span className="first-step">first step</span> in tech career</p>
                <p className="second-header text-center mt-1">find your first job in tech industry</p>
            </div>
        )
    }
}

export default Title
