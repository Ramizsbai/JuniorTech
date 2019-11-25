import React from 'react';
import './app.css';

<<<<<<< HEAD
=======
import Home from './home/Home';

import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Jobs from './Jobs/Jobs';
import About from './about/About';

>>>>>>> 88c36e00d5b251a759463acfe52f84736c0c84ca

function App() {
  return (
        <BrowserRouter>

    <div className="App">

<<<<<<< HEAD
      <Header />

ggit
====
    
    
    

         <Navbar />
         <Switch>
           <Route path='/' component={Home} exact/> 
           <Route path='/jobs' component={Jobs}/> 
           <Route path='/about' component={About}/> 

         </Switch>
>>>>>>> 88c36e00d5b251a759463acfe52f84736c0c84ca

    </div>
    </BrowserRouter>   

  );
}

export default App;
