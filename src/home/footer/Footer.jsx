import React, { Component } from 'react';
import Card from './footerComponent/card/Card';
import Contact from './footerComponent/contact/Contact';
import LastPart from './footerComponent/lastPart/LastPart';
import './footer.css';



export class Footer extends Component {
    render() {
        return (
            <div className="home-footer">
                <Card />
                <Contact />
                <LastPart />
            </div>
        )
    }
}

export default Footer
