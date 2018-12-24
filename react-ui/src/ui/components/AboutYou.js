// Libraries
import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";

// Actions
import { saveCompany } from "../../actions/company.js";

// Util
import { SELECT_STYLE } from "../../util/styles.js";
import {
  ROLE_OPTIONS,
  TYPE_OPTIONS
} from "../../util/registrationSelectOptions.js";


class AboutYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      restaurant: this.props.restaurant,
      phone: this.props.phone,
      address: this.props.address,
      role: this.props.role,
      type: this.props.type,
    };
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  handleSelectChange = name => option => {
    this.setState({ [name]: option });
  }

  saveCompany = () => {
    const { name, restaurant, phone, address, role, type } = this.state;
    this.props.saveCompany(
      name,
      restaurant,
      phone,
      address,
      !!role && role.value,
      !!type && type.value);
  }

  nextStep = () => {
    this.saveCompany();
    this.props.nextStep();
  }

  prevStep = () => {
    this.saveCompany();
    this.props.prevStep();
  }

  render() {
    return (
      <div>

        <FormTitle title="About You" />

        <FormRow>
          <FormContainer label="your name">
            <Text
              id="your_name"
              onChange={this.handleInputChange("name")}
              value={this.state.name}
              required={true} />
          </FormContainer>

          <FormContainer label="your role">
            <Select
              id="your-role"
              styles={SELECT_STYLE}
              options={ROLE_OPTIONS}
              onChange={this.handleSelectChange("role")}
              value={this.state.role}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="restaurant name">
            <Text
              id="restaurant-name"
              onChange={this.handleInputChange("restaurant")}
              value={this.state.restaurant}
              required={true} />
          </FormContainer>

          <FormContainer label="restaurant type">
            <Select
              id="restaurant-type"
              styles={SELECT_STYLE}
              options={TYPE_OPTIONS}
              onChange={this.handleSelectChange("type")}
              value={this.state.type}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="phone number">
            <Text
              id="phone-number"
              onChange={this.handleInputChange("phone")}
              value={this.state.phone}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="company address">
            <Text
              id="company-address"
              onChange={this.handleInputChange("address")}
              value={this.state.address}
              required={true} />
          </FormContainer>
        </FormRow>

        <div className="footer">
          <div className="button prev-button" onClick={this.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.nextStep}>
            2 of 5
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const role = state.company.role;
  const type = state.company.type;
  return {
    name: state.company.name,
    restaurant: state.company.restaurant,
    phone: state.company.phone,
    address: state.company.address,
    role: role && ROLE_OPTIONS.find(o => o.value === role),
    type: type && TYPE_OPTIONS.find(o => o.value === type)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveCompany: (...args) => dispatch(saveCompany(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutYou);
