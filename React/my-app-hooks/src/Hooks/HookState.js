import React, {useState} from 'react';
import '../App.css';

function HookState() {

    const [count,setCount] = useState(100);

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count - 1);
    }

    // const rgb =[32,233,43];
    // console.log(rgb[0]);

  return (
    <div className="App">
      <header className="App-header">
            <h1>React Hooks Count: {count}</h1>
            <button onClick={increase}>Count</button>
            <button onClick={decrease}>Minus</button>
      </header>
    </div>
  );
}

export default HookState;