import React, { Component } from 'react';
import './title.css';
import './responsive-home-header-title.css';

export class Title extends Component {
    render() {
        return (
            <div className="headerTitle">
                <p className="first-header text-center"><div className="my-auto">YOUR FIRST STEP IN </div><span className="Tech mx-2">TECH</span> <div className="my-auto">CAREER</div></p>
                <p className="second-header text-center mt-1">find your first job in tech industry</p>
            </div>
        )
    }
}

export default Title
