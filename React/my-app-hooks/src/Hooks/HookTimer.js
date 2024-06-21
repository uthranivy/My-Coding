import React, {useState} from 'react';
import '../App.css';




function HookTimer() {

    const [timer,setTimer] = useState(now());

    function now(){
        return new Date().toLocaleTimeString();
    }

    function updateTime(){
         setTimer(now());
    } 

    setInterval(updateTime, 1000);
 
  return (
    <div className="App">
      <header className="App-header">
            <h1>{timer}</h1> 
      </header>
    </div>
  );
}

export default HookTimer;