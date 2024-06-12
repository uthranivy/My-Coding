import React from 'react';
import App from './App';

function MyProp(props) { 
      return (
      <React.Fragment>
            <h1>Hello , {props.name}</h1>
                <MyPropChild name = "Deva"/>
                <MyPropChild name = "Guru"/>
                <MyPropChild name = "Harish"/>
             <App />
      </React.Fragment>
      );
} 

function MyPropChild(props) { 
    return (
    <React.Fragment>
         <h1>Hello, {props.name} </h1>
    </React.Fragment>
    );
  } 

  export default MyProp;