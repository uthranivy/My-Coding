import "./Form.css";
import React, { Component } from "react";
import Movemnt from "./Movemnt";
import FormValidation from "./FormValidation";

class FormEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: "Hello world",
      formInputText: "Hello world 2",
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnUp = this.handleOnUp.bind(this);
    this.handleOndown = this.handleOndown.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOndown() {
    this.setState({
      mouseDown: true,
    });
  }
  handleOnUp() {
    this.setState({
      mouseDown: false,
    });
  }

  handleOnClick() {
    this.setState((state) => {
      return {
        mouseClicked: state.mouseClicked + 1,
      };
    });
  }

  handleOnChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formInputTextSubmitted: this.state.formInputText,
    });
  };

  render() {
    return (
      <div>
        <section className="modal-content">
          <div className="modal-header">
            <h2>Mouse events:</h2>
          </div>
          <div className="modal-body">
            <button
              onClick={this.handleOnClick}
              onMouseDown={this.handleOndown}
              onMouseUp={this.handleOnUp}
            >
              click me
            </button>
            <p>Button mouse down: {this.state.mouseDown ? "true" : "false"}</p>
            <p>Button clicked: {this.state.mouseClicked}</p>
          </div>
        </section>
        <section className="modal-content">
          <div className="modal-header">
            <h3>Input change events:</h3>
          </div>
          <div className="modal-body">
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.inputText}
            ></input>
            <p>Input value: {this.state.inputText}</p>
          </div>
        </section>
        <section className="modal-content">
          <div className="modal-header">
            <h3>Form Submit events:</h3>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleOnSubmit}>
              <input type="text" value={this.state.formInputText} />
              <button type="submit">Submit</button>
              <p>Input value: {this.state.formInputText}</p>
              <p>Submitted value: {this.state.formInputTextSubmitted}</p>
            </form>
          </div>
        </section>
        <section>
          <Movemnt />
          <FormValidation />
        </section>
      </div>
    );
  }
}

export default FormEvent;
