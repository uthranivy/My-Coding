import React  from 'react';
import '../App.css';
 
 
    function UserGreeting(props) { 

        const currentTime = new Date(2020,7,24,18).getHours;


        return (
           <div> 
            {
                currentTime > 12 ? <h1>Still Are You Working</h1> : null
            }
           </div>
        );
      }
        
          
export default UserGreeting;