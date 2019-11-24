import React from 'react';
import './app.css';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Jobs from './Jobs/Jobs';
import Home from './home/Home';
import About from './about/About';

function App() {
  return (
        <BrowserRouter>

    <div className="App">
      <div className="bg-image">
         <Navbar />
         <Switch>
           <Route path='/' component={Home} exact/> 
           <Route path='/jobs' component={Jobs}/> 
           <Route path='/about' component={About}/> 

         </Switch>
      </div>
    </div>
    </BrowserRouter>   

  );
}

export default App;
