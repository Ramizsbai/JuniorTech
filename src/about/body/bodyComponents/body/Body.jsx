import React, { Component } from 'react';
import './body.css'

export class Body extends Component {
    render() {
        return (
            <div className="about-body">
                <div className="head">
                    <h2>Our Team</h2>
                </div>
                <div className="body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Natus facere nesciunt ipsa, porro dignissimos architecto dolore aperiam eum,
                        neque sit, consectetur vel quibusdam vitae eveniet esse in!
                        Magni veritatis unde voluptates natus doloribus, minus,
                    nam, voluptatum temporibus illum laboriosam laborum?</p>
                </div>
            </div>
        )
    }
}

export default Body;
