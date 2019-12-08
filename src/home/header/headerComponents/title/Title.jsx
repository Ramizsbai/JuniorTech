import React, { Component } from 'react';
import './title.css';
import './responsive-home-header-title.css';

export class Title extends Component {
    render() {
        return (
            <div className="headerTitle">
                <p className="first-header text-center">Your first step in <span className="Tech">Tech</span> career</p>
                <p className="second-header text-center mt-1">find your first job in tech industry</p>
            </div>
        )
    }
}

export default Title
