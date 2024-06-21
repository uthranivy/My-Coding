import React,{Component} from 'react';
import './App.css';

class TickDate extends Component{

    constructor(props){
        super(props);
        this.state ={date: new Date()}
    }

    componentDidMount(){
            this.timerID = setInterval(
                () => this.tick()
                ,1000
            ); 
    }

    componentWillUnmount(){
            clearInterval(this.timerID)
    }

    tick(){
        this.setState ={date: new Date()}
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>Hello, World!</h2>
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                </header>
            </div>
            )
    } 
}



export default TickDate;


