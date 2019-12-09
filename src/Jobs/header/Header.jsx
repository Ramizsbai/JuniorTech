import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './header.css';
import './responsive-jobs-header.css';

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="job-header mx-auto">
                    <input className="jobs-title-input" type="text" placeholder="Job Title"></input>

                    <input className="jobs-location-input" type="text" placeholder="Location"></input>
                    <div className="my-auto button-background"><Button color="info" className='searchButton my-auto'>Search</Button></div>
                </div>
            </div>


        );
    }
}
export default Header;
