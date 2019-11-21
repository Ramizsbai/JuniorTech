import React, { Component } from 'react';
import "./header.css";
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Jobs from '../../../Jobs/Jobs';
class Header extends Component {
    render() {
        return (
            <BrowserRouter>
      <div className="bg-image">
         <Navbar />
         <Route path='/Jobs' component={Jobs} />
         
      </div>
      </BrowserRouter>               
           
        )
    }
}

export default Header
