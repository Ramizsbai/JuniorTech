import React, { Component } from 'react';
import Card from './footerComponent/card/Card';

import './footer.css';



export class Footer extends Component {
    render() {
        return (
            <div className= 'mainDivFooter' >
                <Card />
            
            </div>
        )
    }
}

export default Footer
