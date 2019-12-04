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
                    <Button className="d-flex ml-3 my-auto" color="success">Send</Button>
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
