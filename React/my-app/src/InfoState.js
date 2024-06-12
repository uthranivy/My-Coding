import React from 'react'; 

class InfoState extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            fname: "Anu Shree",
            initials: 'JS',
            info:   [{title: 'ReactJS', text: 'User Interface' },
                    {title: 'Redux', text: 'Container for 35 Apps'},
                    {title: 'GraphQL', text: 'Query language API'},]
        }; //object
    }
        switchFullstack = (newcourse) => {
        this.setState( {
            info: [
                { title: newcourse, text: 'Runtime Env' },
                { title: 'Express', text: 'Web Framework' },
                { title: 'Mongo08', text: 'NoSQL Database'}]
        } )   
    }
 

    render() {
      return (
      <React.Fragment>
           <div>
                <h2>{this.state.fname}</h2>
                <span>{this.state.initials}</span>
                <ul>
                    <li>{this.state.info[0].title} , {this.state.info[0].text}</li>
                    <li>{this.state.info[1].title} , {this.state.info[1].text}</li>
                    <li>{this.state.info[2].title} , {this.state.info[2].text}</li>
                </ul>
           </div>
           <button onClick={() => this.switchFullstack("NodeJS")}>Switch Me</button> 
      </React.Fragment>
      );
    }
   }

  export default InfoState;