import React, { Component } from 'react';
import './footer.css';
import { Button } from 'reactstrap';



export class Footer extends Component {
    render() {
        return (
            <div className="home-footer">

                <h2 id="Subscribe"> Subscribe Now ! </h2>
                <div className="home-footer2">
                    <input className="input-footer" type="text" placeholder="Email address"></input>
                    <Button className="button-footer d-flex ml-3 my-auto" color="success">Send</Button>
                </div>
                <div className="flex-row">
                    <ul className="footer-list">

                        <h4 className="footer-list1">Contact Us</h4>

                        <li>contact us</li>
                        <li>contact us</li>
                        <li>contact us</li>
                    </ul>
                    <ul className="footer-list">

                        <h4 className="footer-list1">Contact Us</h4>

                        <li>contact us</li>
                        <li>contact us</li>
                        <li>contact us</li>
                    </ul>
                </div>

                <div className="LastPart mx-auto container">
                    <div className="copyright">
                        <p className="my-auto">Cobyright by: Stonres</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
