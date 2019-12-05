import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import './Body.css'
import DesComponent from './bodyComponents/DesComponent/DesComponent'
import JobComponent from './bodyComponents/jobComponent/JobComponent'



export class BodyComponent extends Component {

    state = {
        description: null,
        users: [],
        error: null,
        loading: true,

    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, loading: false })

            })
            .catch((e) => {
                this.setState({ loading: false, error: e })
            });
    }



    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (
            <div className='mainBody'>
                <div className="jobs-body-container">
                    <div className="jobs-container" id="style-1">
                        <JobComponent users={this.state.users} />
                    </div>
                    <Route path="/jobs/:id" render={(routeProps) => <DesComponent users={this.state.users} match={routeProps.match} />} />

                </div>
            </div>
        )
    }
}

export default BodyComponent
