import React, { Component } from 'react';
import './Des.css'
import Logo from './icon/logo.png';
import {Button} from 'reactstrap'
import './DesSub.css';

class DesComponent extends Component {
    constructor(props){
     super(props);
     this.state = {
         name: props.name,
     }
     
    }
    render(){
        return (
            <div className = 'mainDes'>
            <div className='MainSub'>
            
            <div className= 'SubHeader container-fluid d-flex'>

            <div className= 'container d-flex mt-3'>
                <div className= 'logo'><img src={Logo} alt=""/></div>
                <div className= 'companyName mt-3 ml-3'>
                    <h5>{this.state.name}</h5>
                    <div className= 'location'><p>Berlin</p></div>
                    </div>
                    
                    

            </div>
            <div className='applyButton mt-4'><Button>Apply</Button></div>
            </div>



            </div>
            </div>
        )
    }
        
    }


export default DesComponent
