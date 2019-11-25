import React from 'react';
import './app.css';

import Home from './home/Home';

import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Jobs from './Jobs/Jobs';
import About from './about/About';


function App() {
  return (
        <BrowserRouter>

    <div className="App">

    
    
    

         <Navbar />
         <Switch>
           <Route path='/' component={Home} exact/> 
           <Route path='/jobs' component={Jobs}/> 
           <Route path='/about' component={About}/> 

         </Switch>

    </div>
    </BrowserRouter>   

  );
}

export default App;
