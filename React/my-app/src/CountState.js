import React from 'react'; 

class CountState extends React.Component {

    constructor(props){
        super(props);

        this.state = { count: 0 }; //object

    }

    onMyClick(){
        this.setState({ count: this.state.count + 1});
    }
    onRemoveClick(){
        this.setState({ count: this.state.count - 1});
    }

    render() {
      return (
      <React.Fragment>
           <div>Count: {this.state.count}</div>
           <button onClick={this.onMyClick.bind(this)}>Click!</button>
           <button onClick={this.onRemoveClick.bind(this)}> Remove</button>
      </React.Fragment>
      );
    }
  }

  export default CountState;