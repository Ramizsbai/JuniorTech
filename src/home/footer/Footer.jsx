import React, { Component } from 'react';
import './footer.css';
import './responsive-home-footer.css';
import { Button } from 'reactstrap';
import Icon from './facebook.png';
import Icon1 from './instagram.png';
import Icon2 from './linkedin.png';
import Icon3 from './twitter.png';


export class Footer extends Component {
    render() {
        return (


            <div className="footer-home">
                <div className="footer-image">

                    <div className= 'mainSubscribe'>
                        <h2 id ='subscribeNow'> Subscribe Now !</h2>
                        <div className="home-footer2">
                        <input className="input-footer" type="text" placeholder="Email address"></input>
                        <Button className="button-footer d-flex ml-3 my-auto" color="success">Send</Button>
                    </div>
                    </div>

            

                    <div className="flex-row">
                        <ul className="footer-list">

                            <h4 className="footer-list1">Contact Us</h4>

                            <li>FAQ</li>
                            <li>Press</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul className="footer-list">

                            <h4 className="footer-list1">About Us</h4>

                            <li>Cookies</li>
                            <li>Browse Jobs</li>
                            <li>Cookies</li>
                        </ul>
                        <div className="footer-icons">
                            <div>
                                <h4 className="footer-list1">Find us</h4>
                            </div>
                            <div className= 'mainIcons'>
                                <img className="Icon mr-2" src={Icon} alt="footer-icon" />
                                <img className="Icon1 mr-2" src={Icon1} alt="footer-icon1" />
                                <img className="Icon2 mr-2" src={Icon2} alt="footer-icon2" />
                                <img className="Icon3 mr-2" src={Icon3} alt="footer-icon3" />
                            </div>
                        </div>
                    </div>


                    {/* <div className= 'mainSubscribe'>
                    <h2 id="Subscribe"> Subscribe Now ! </h2>
                    <div className="home-footer2">
                        <input className="input-footer" type="text" placeholder="Email address"></input>
                        <Button className="button-footer d-flex ml-3 my-auto" color="success">Send</Button>
                    </div>
                    </div> */}


                    {/* <div className="flex-row">
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
                        <div className="footer-icons">
                            <div>
                                <h4 className="footer-list1">Find us</h4>
                            </div>
                            <div>
                                <img className="Icon mr-2" src={Icon} alt="footer-icon" />
                                <img className="Icon1 mr-2" src={Icon1} alt="footer-icon1" />
                                <img className="Icon2 mr-2" src={Icon2} alt="footer-icon2" />
                                <img className="Icon3 mr-2" src={Icon3} alt="footer-icon3" />
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
        );
    }
}

export default Footer;
