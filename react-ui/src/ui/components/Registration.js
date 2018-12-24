// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import Email from "../uikit/input/Email.js";
import Password from "../uikit/input/Password.js";

// Actions
import { saveUser } from "../../actions/user.js";


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
      confirm: this.props.confirm,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  nextStep = () => {
    const { email, password, confirm } = this.state;
    this.props.saveUser(email, password, confirm);
    this.props.nextStep();
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
          <div className="button next-button right-button" onClick={this.nextStep}>
            1 of 5
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.user.email,
    password: state.user.password,
    confirm: state.user.confirm
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveUser: (...args) => dispatch(saveUser(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
