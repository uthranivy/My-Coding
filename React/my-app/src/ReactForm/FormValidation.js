import "./Form.css";
import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      feedback: "",
      validationErrors: {},
      acceptedTerms: false,
      submitted: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  handleOnChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "text" ? target.value : target.checked; // this.state.acceptedTerms

    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const isFormValid = this.validateFields();
    if (isFormValid) {
      this.setState((state) => {
        return {
          submitted: state.submitted + 1,
        };
      });
    }
  };

  validateFields() {
    const { firstName, feedback, acceptedTerms } = this.state;
    const errors = {};

    if (!firstName) {
      errors["firstName"] = "First Name cannot be empty";
    }

    if (!feedback) {
      errors["feedback"] = "Feedback cannot be empty";
    } else if (feedback && feedback.length < 5) {
      errors["feedback"] = "Feedback should have atleast 5 characters";
    }

    if (!acceptedTerms) {
      errors["acceptedTerms"] = "Please accept terms";
    }

    this.setState({
      validationErrors: errors,
    });

    return Object.keys(errors).length === 0;
  }

  render() {
    const {
      firstName: firstNameError,
      feedback: feedbackError,
      acceptedTerms: acceptedTermsErrors,
    } = this.state.validationErrors;

    return (
      <div>
        <section className="modal-content">
          <div className="modal-header">
            <h3>Form Submit events:</h3>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleOnSubmit}>
              <label>
                <span className="error">{firstNameError}</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                />
              </label>
              <br />
              <label>
                <span className="error">{feedbackError}</span>
                <input
                  type="text"
                  name="feedback"
                  placeholder="Feedback"
                  value={this.state.feedback}
                  onChange={this.handleOnChange}
                />
              </label>
              <br />
              <label>
                <span className="error">{acceptedTermsErrors}</span>
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={this.state.acceptedTerms}
                  onChange={this.handleOnChange}
                />
                I accept the terms
              </label>
              <br />
              <button type="submit">Submit</button>
              <br />
              <p>Submitted {this.state.submitted} times!</p>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
export default FormValidation;
