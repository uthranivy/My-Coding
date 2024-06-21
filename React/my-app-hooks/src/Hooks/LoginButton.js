import React from 'react'; 
import '../App.css';
 
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Log IN
        </button>
    );
}
        
         

export default LoginButton;