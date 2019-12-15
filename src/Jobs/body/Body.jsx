
import React, { Component } from 'react';
import Filter from './filterComponent/filter';
import { Route } from 'react-router-dom';
import './Body.css';
import DesComponent from './bodyComponents/DesComponent/DesComponent';
import JobComponent from './bodyComponents/jobComponent/JobComponent';




export class BodyComponent extends Component {

    state = {
        description: null,
        jobs: [],
        job: "java",
        city: "berlin",
        error: null,
        loading: true,

    }
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    }


    componentDidMount() {
        const job = this.state.job;
        const city = this.state.city;
        const APP_ID1 = 'c7212bc0';
        const API_KEY1 = '3ae54560f5840fd67f71ae9bd4f53330';
        const url = `https://cors-anywhere.herokuapp.com/http://api.adzuna.com:80/v1/api/jobs/de/search/1?app_id=${APP_ID1}&app_key=${API_KEY1}&results_per_page=20&what=${job}&where=${city}&content-type=application/json`
        fetch(url)

            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({ jobs: data.results, loading: false })

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
