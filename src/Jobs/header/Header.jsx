import React, { Component } from 'react';
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className="jobs-header">
                <form class="awesome-form">

                    <div class="input-group">
                        <input type="text"></input>
                        <label>Your Full Name</label>
                    </div>

                    <div class="input-group">
                        <input type="email"></input>
                        <label>Your Email Address</label>
                    </div>

                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default Header;
