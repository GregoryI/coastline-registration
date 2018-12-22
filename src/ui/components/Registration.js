// Libraries
import React, { Component } from "react";

// UIkit
// import TextInput from "../uikit/TextInput";


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>

        <div className="title">
          Registration
        </div>

        <div className="input-container">
          <div className="input-label">
            EMAIL
          </div>
          <input type="email" />
        </div>

        <div className="input-container">
          <div className="input-label">
            PASSWORD
          </div>
          <input type="password" />
        </div>

        <div className="input-container">
          <div className="input-label">
            CONFIRM PASSWORD
          </div>
          <input type="password" />
        </div>

        <div className="footer">
          <div className="next-button" onClick={this.props.nextStep}>
            1 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default Registration;
