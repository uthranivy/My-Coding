import "./Form.css";
import React, { Component } from "react";

class Movemnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePositionX: 0,
      mousePositionY: 0,
      windowScrollY: 0,
    };
  }

  handleOnMouseMove = (e) => {
    // console.log(e);
    this.setState({
      mousePositionX: e.nativeEvent.offsetX,
      mousePositionY: e.nativeEvent.offsetY,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      windowScrollY: Math.floor(window.scrollY),
    });
  };

  render() {
    return (
      <div>
        <section className="modal-content">
          <div className="modal-header">
            <h3>Mouse Position:</h3>
          </div>
          <div className="modal-body" onMouseMove={this.handleOnMouseMove}>
            <p>x: {this.state.mousePositionX}</p>
            <p>y: {this.state.mousePositionY}</p>
          </div>
        </section>
        <section className="modal-content">
          <div className="modal-header">
            <h3>Window Scroll Position:</h3>
          </div>
          <div className="modal-body">
            <p>y: {this.state.windowScrollY}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Movemnt;
