import React, { Component } from 'react';
import './intro.css';
import { CardTitle, CardText } from 'reactstrap';

export class Intro extends Component {
    render() {
        return (
            <div className="home-Intro d-flex">
                <div className="title-intro d-flex my-auto">
                    <CardTitle>names</CardTitle>
                    <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle>names</CardTitle>
                    <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle>names</CardTitle>
                    <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle>names</CardTitle>
                    <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                    <CardTitle>names</CardTitle>
                    <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vel.</CardText>
                </div>
            </div>
        );
    }
}
export default Intro;