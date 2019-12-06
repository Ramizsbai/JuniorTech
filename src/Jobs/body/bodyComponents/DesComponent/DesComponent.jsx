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
            user: [],
            error: null,
        }
    }

    fetchUserData = (id) => {
        this.setState({ loading: true })
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
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

        const user = this.state.user;

        return (
            <div className='mainDes'>
                <div className='MainSub'>

                    <div className='SubHeader container-fluid d-flex'>

                        <div className='container d-flex mt-3'>
                            <div className='logo'><img src={Logo} alt="" /></div>
                            <div className='companyName mt-3 ml-3'>
                                <h5>{user.name}</h5>
                                <div className='location'><p>{user.city}</p></div>
                            </div>

                            <div>{user.id}</div>

                        </div>
                        <div className='applyButton mt-4'><Button>Apply</Button></div>
                    </div>



                </div>
            </div>
        )
    }

}


export default DesComponent
