import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import './profiles.css';

export class Profiles extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" height="100px" src="PHOTO-2019-07-06-16-23-43.jpg" alt="Card image cap" />
                </Card>
            </div>

        );
    }
}
export default Profiles;