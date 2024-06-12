import React from 'react'; 

function Welcome() {
    return (
      <div className="Welcome">
          <h1>Other Components</h1> 
          <MyFirst  />
          <MySecond />
      </div>
    );
  }

function MyFirst() {
    return (
      <div className="MyFirst">
           <h1>My First Component</h1>
      </div>
    );
}

function MySecond() {
    return (
      <div className="Second">
           <h1>My Second Component</h1>
            <Nested />
      </div>
    );
  }

  function Nested() {
    return (
      <div className="Nested">
           <h1>My Nested Component</h1>
      </div>
    );
  }
  
export default Welcome;