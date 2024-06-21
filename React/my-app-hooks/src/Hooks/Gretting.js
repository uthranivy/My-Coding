import React from 'react';
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'
import '../App.css';
 
 
    function Greeting(props) {
        const isLoggedIn=props.isLoggedIn;
        
        return isLoggedIn ? <UserGreeting /> : <GuestGreeting />; 
         
      }
        
         

export default Greeting;