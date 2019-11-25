import React from 'react';
import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="border">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, neque?
                </p>
                <button className="button">Contact Us</button>
            </div>
            <div className="contain">
                <div className="col">
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Products</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Accounts</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </div>

    );
}




export default Footer;
