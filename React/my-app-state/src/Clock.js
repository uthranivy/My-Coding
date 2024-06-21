import React from 'react';
import './App.css';

function Clock(props){
    return(
    <div className="App">
        <header className="App-header">
            <h2>Hello, World!</h2>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </header>
    </div>
    )
}



export default Clock;