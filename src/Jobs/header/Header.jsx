import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="job-header">
                    <input type="text" placeholder="Job Title"></input>
                    <input type="text" placeholder="Location"></input>
                    <Button className="d-flex" color="success">Search</Button>
                </div>
            </div>


        );
    }
}
export default Header;
