import React, {Component} from 'react';
import './jobComponent.css';
import JobSubComponent from './jobSubComponent/JobSubComponent';

class JobComponent extends Component {
   constructor(props){
     super(props);
     this.state ={
    users: [],
     }
   }
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        this.setState({users : data})
        console.log(this.state)
    })
    .catch(console.log);
    
}

      
    render(){
      let users = this.state.users
      return (
        <div>
        {
            users.map((user) => ( 
           
           <JobSubComponent name={user.name} key={user.id} email={user.email} address={user.address.city} onClick={this.props.description(user)}/>
         
      ))  
          }
        </div>
       
     )
    }

    
}

export default JobComponent
