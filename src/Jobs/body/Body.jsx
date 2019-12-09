
import React, { Component } from 'react';
import Filter from './filterComponent/Filter';
        import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Body.css';
import DesComponent from './bodyComponents/DesComponent/DesComponent';
import JobComponent from './bodyComponents/jobComponent/JobComponent';



export class BodyComponent extends Component {

    state = {
        description: null,
        jobs: [],
        error: null,
        loading: true,

    }


    componentDidMount() {
        fetch("https://jobsapi.p.rapidapi.com/api/job?api_token=iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jobsapi.p.rapidapi.com",
                "x-rapidapi-key": "4cd53743a9msh5356cec67043751p197680jsn086dd4e1ed05"
            }
        })

            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({ jobs: data.data, loading: false })

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
                        <JobComponent jobs={this.state.jobs} />
                    </div>
                    <Route path="/jobs/:id" render={(routeProps) => <DesComponent jobs={this.state.jobs} match={routeProps.match} />} />

                </div>

            </div>
        )
    }
}


export default BodyComponent;
