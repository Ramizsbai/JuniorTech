import React, { Component } from 'react';
import Card from './footerComponent/card/Card';
import Contact from './footerComponent/contact/Contact';




export class Footer extends Component {
    render() {
        return (
            <div>
                <Card />
                <Contact />

            </div>
        )
    }
}

export default Footer
