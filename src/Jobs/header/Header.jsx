import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="job-header mx-auto">
                    <input className="header-input-jobs my-auto mr-5" type="text" placeholder="Job Title"></input>
                    <div className="green-line mr-5"></div>
                    <input className="header-input-jobs my-auto" type="text" placeholder="Location"></input>
                    <div className="my-auto button-background"><Button color="info" className='searchButton my-auto'>Search</Button></div>
                </div>
            </div>


        );
    }
}
export default Header;
