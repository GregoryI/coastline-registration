// Libraries
import React, { Component } from "react";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import Email from "../uikit/inputs/Email.js";
import Password from "../uikit/inputs/Password.js";


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

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  render() {
    return (
      <div>

        <FormTitle title="Registration" />

        <FormRow>
          <FormContainer label="email">
            <Email
              id="email"
              onChange={this.handleInputChange("email")}
              value={this.state.email}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="password">
            <Password
              id="password"
              onChange={this.handleInputChange("password")}
              value={this.state.password}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="confirm password">
            <Password
              id="confirm-password"
              onChange={this.handleInputChange("confirm")}
              value={this.state.confirm}
              required={true} />
          </FormContainer>
        </FormRow>

        <div className="footer">
          <div className="button next-button right-button" onClick={this.props.nextStep}>
            1 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default Registration;
