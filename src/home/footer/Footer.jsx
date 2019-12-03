import React, { Component } from 'react';
import './footer.css';
import { Button } from 'reactstrap';


export class Footer extends Component {
    render() {
        return (
            <div className="home-footer">
                <h5 id="Subscribe">Subscribe Now !</h5>
                <div className="home-footer2 mx-auto">
                    <input className="input-footer my-auto" type="text" placeholder="Email address"></input>
                    <Button className="d-flex my-auto" color="success">Send</Button>
                </div>

            </div>
        )
    }
}

export default Footer;
