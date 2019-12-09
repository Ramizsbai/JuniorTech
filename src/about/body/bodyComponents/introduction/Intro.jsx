import React, { Component } from 'react';
import './intro.css';
import { CardTitle, CardText } from 'reactstrap';

export class Intro extends Component {
    render() {
        return (
            <div className="home-Intro d-flex">
                <div className="title-intro d-flex">
                    <CardTitle id="card">names</CardTitle>
                    <CardText id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle id="card">names</CardTitle>
                    <CardText id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle id="card">names</CardTitle>
                    <CardText id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle id="card">names</CardTitle>
                    <CardText id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle id="card">names</CardTitle>
                    <CardText id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                </div>
            </div>
        );
    }
}
export default Intro;