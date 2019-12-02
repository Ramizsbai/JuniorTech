import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="input-content">
                    <form className="awesome-form d-flex">
                        <div className="header-container">
                            <div className="input-group">
                                <input type="text" placeholder="Job title"></input>
                            </div>

                            <div className="input-group">
                                <input type="text" placeholder="Locations" ></input>
                            </div>
                            <Button className="searchButton" color="primary">Search</Button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
export default Header;
