import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
         displayInfo: false,
      }
      console.log("Component this: ", this);
      this.readMore = this.readMore.bind(this);
      // this.showLess = this.showLess.bind(this);
  }
 
  readMore(){
      console.log("read info");
      this.setState({
        displayInfo: true,
      });
  }

//   showLess(){
//     console.log("Show Less");
//     this.setState({
//       displayInfo: false,
//     });
// }

// If use Arrow Function did not want to bind.

showLess = () => {
      console.log("Show Less");
      this.setState({
        displayInfo: false,
      });
}

  render(){

  // let info = this.state.displayInfo ? (
  //     <div>
  //         <p>Technology Training</p>
  //         <p>Mern Learning</p>
  //     </div>
  //   ):(<button onClick={this.readMore}>Read More</button>);

    // if(!this.state.displayInfo){
    //   info:null;
    // }

    return (
    <div className="App">
      <header className="App-header">
         <h1>Maanavan Learn React Code</h1>
         <p>Full Stack Development(Mern,Mean,Spring)</p>
         <p>ReactJS,AngularJS,VueJS,NextJs</p> 
         {  this.state.displayInfo ? (
              <div>
                  <p>Technology Training</p>
                  <p>Mern Learning</p>
                  {
                    <button onClick={ this.showLess }>Show Less</button>
                  } 
              </div>
            ):(<button onClick={this.readMore}>Read More</button>)
          }
      </header>
    </div>
  );
}  
}

export default App;
