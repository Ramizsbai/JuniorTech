import React from 'react';
import './jobSubComponent.css';
import logo from './icons/logo.png';

const JobSubComponent = (user) => {
 

      return (

       <div className="jobs-sub-component" key={user.id} >
       <div className="job-post-component container-fluid d-flex mt-3 mb-3">
         <div className="company-logo">
           <img src={logo} alt="company-logo" className="job-company-logo" />
         </div>
         <div className="job-post">
           <div className="job-post-left d-flex flex-column ml-4">
             <span className="job-post-title">{user.name}</span>
             <span className="job-post-company">{user.email}</span>
             <span className="job-post-location">{user.address}</span>
           </div>
           <div className="job-post-right">
              <div className="job-post-save">

              </div>
              <div className="job-post-skills-lights">

              </div>
           </div>
         </div>
       </div>
       <hr className="job-post-line"></hr>
   </div>
   
   )
     
    
}

export default JobSubComponent
