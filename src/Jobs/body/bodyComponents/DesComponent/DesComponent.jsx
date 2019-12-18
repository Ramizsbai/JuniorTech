import React, { Component } from 'react';
import './Des.css'
import Logo from './icon/logo.png';
import { Button, Spinner } from 'reactstrap'
import './DesSub.css';

class DesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            jobs: [],
            error: null,
        }
    }
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    }

    fetchUserData = (id) => {
        this.setState({ loading: true })
        const job = 'java';
        const city = 'berlin';
        const APP_ID1 = 'c7212bc0';
        const API_KEY1 = '3ae54560f5840fd67f71ae9bd4f53330';
        const url = `https://cors-anywhere.herokuapp.com/http://api.adzuna.com:80/v1/api/jobs/de/search/1?app_id=${APP_ID1}&app_key=${API_KEY1}&results_per_page=20&what=${job}&where=${city}&content-type=application/json`;
        fetch(url)

            .then(response => response.json())
            .then(data => {

                this.setState({ user: data, loading: false })


            })
            .catch((e) => {
                console.error(e)
                this.setState({ loading: false, error: e })
            });
    }


    componentDidMount() {
        this.fetchUserData(this.props.match.params.id)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        const nextId = nextProps.match.params.id
        const currentId = this.props.match.params.id

        if (nextId !== currentId) {
            this.fetchUserData(nextId)
        }
    }


    render() {
        if (this.state.loading) {
            return <div style={{ display: 'flex', width: '100%', height: '50vh', justifyContent: 'center', alignItems: 'center' }}><Spinner /></div>
        }

        if (this.state.error) {
            return <div>There was an error while fetching the data from the server</div>
        }

        const jobDes = this.state.jobs;

        return (
            <div className='mainDes'>
                <div className='MainSub'>

                    <div className='SubHeader container-fluid d-flex'>

                        <div className='container d-flex mt-3'>
                            <div className='logo'><img src={Logo} alt="" /></div>
                            <div className='companyName mt-3 ml-3'>
                                <h5>{jobDes.title}</h5>
                                <div className='location'><p>{jobDes.city}</p></div>
                            </div>

                            <div>{jobDes.id}</div>

                        </div>
                        <div className='applyButton mt-4'><Button>Apply</Button></div>
                    </div>



                </div>
            </div>
        )
    }

}


export default DesComponent;
