
import React,{Component} from 'react'; 
import './App.css';

class MyToggle extends Component {

  constructor(props){
      super(props);
      this.state = {
         displayInfo: false,
      }
      console.log("Component this: ", this);
    //   this.toggleInfo = this.toggleInfo.bind(this); 
  }
 
//   readMore(){
//       console.log("read info");
//       this.setState({
//         displayInfo: true,
//       });
//   } 

// showLess = () => {
//       console.log("Show Less");
//       this.setState({
//         displayInfo: false,
//       });
// }


    toggleInfo() {
        console.log("Toggle Info: ", this);
              this.setState({
                displayInfo: !this.state.displayInfo,
              });
    }

  render(){ 

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
                    <button onClick={() => this.toggleInfo() }>Show Less</button>
                  } 
              </div>
            ):(<button onClick={() =>this.toggleInfo()}>Read More</button>)
          }
      </header>
    </div>
  );
}  
}

export default MyToggle;
