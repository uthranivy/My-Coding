import React,{Component} from 'react';
 

class Myevent extends Component {

//   constructor(props){
//       super(props);
//       this.state = {
//          displayInfo: false,
//       }
//   }

  handleClick() {
        console.log("Hello All!")
  }
 
  render(){ 

    return (
    <div className="Myevent">
      <header className="Myevent-header">
         <button onClick={this.handleClick}>Activated Laser</button>
      </header>
    </div>
  );
}  
}

export default Myevent;
