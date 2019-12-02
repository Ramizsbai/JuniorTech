import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="job-header mx-auto">
                    <input className="header-input-jobs my-auto" type="text" placeholder="Job Title"></input>
                    <div className="black-line mr-5"></div>
                    <input className="header-input-jobs my-auto" type="text" placeholder="Location"></input>
                    <Button className="d-flex my-auto" color="success">Search</Button>
                </div>
            </div>


        );
    }
}
export default Header;
