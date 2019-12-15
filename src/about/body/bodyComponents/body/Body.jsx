import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import './body.css'

const Body = (props) => {
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
            <div className="footer">
                <CardImg src="PHOTO-2019-07-06-16-23-43.jpg" width="100%" alt=" Card image cap" />
                <div className="Info">
                    <h6>Card Title</h6>
                    <p>front-end developer</p>

                </div>
            </div>
        </div>
    );
}

export default Body;
