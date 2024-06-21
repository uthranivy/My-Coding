import React from 'react';
import TickDate from './TickDate';
import Clock from './Clock';
import './App.css';

function MyClock(){ 
    return (
        <div className="App">
        <header className="App-header">
        <h1>Parent Component</h1> 
        <Clock date={new Date()} /> 
        <TickDate /> I
        {/* <h2>It is (new Date().toLocaleTimeString()}.</h2> */}
        </header>
        </div>
        );
}


export default MyClock;
