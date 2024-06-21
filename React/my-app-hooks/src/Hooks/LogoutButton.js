import React from 'react'; 
import '../App.css';
 
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
        
         

export default LogoutButton;