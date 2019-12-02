import React, { Component } from 'react';
import {Button} from 'reactstrap'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <div className="input-content">
                    <form className="awesome-form d-flex">
                        <div className="content d-flex">
                        <div className="input-group">
                            <input type="text" placeholder="Job title"></input>
                        </div>

                        <div className="input-group">
                            <input type="text" placeholder="Locations" ></input>
                        </div>
                        <Button className="searchButton mt-5 " color="primary">Search</Button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
export default Header;
