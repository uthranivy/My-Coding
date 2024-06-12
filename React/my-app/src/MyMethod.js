import React from 'react';
import App from './App';
// import MyProp from './MyProp';

class MyMethod extends React.Component {
    render() {
      return (
      <React.Fragment>
            <h1>Hello ALL, {this.props.name}</h1> 
            <App />
      </React.Fragment>
      );
    }
  }

  export default MyMethod;