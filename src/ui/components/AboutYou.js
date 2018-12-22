// Libraries
import React, { Component } from "react";

// UIkit
// import TextInput from "../uikit/TextInput";


class AboutYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      restaurant: "",
      phone: "",
      address: "",
      role: "",
      type: "",
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
          About You
        </div>

        <div className="input-row">
          <div className="input-container">
            <div className="input-label">
              YOUR NAME
            </div>
            <input type="text" />
          </div>

          <div className="input-container">
            <div className="input-label">
              YOUR ROLE
            </div>
            <input type="text" />
          </div>
        </div>

        <div className="input-container">
          <div className="input-label">
            CONFIRM PASSWORD
          </div>
          <input type="password" />
        </div>

        <div className="footer">
          <div className="next-button" onClick={this.props.prevStep}>
            2 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default AboutYou;
