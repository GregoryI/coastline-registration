// Libraries
import React, { Component } from "react";
import Select from "react-select";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import TextInput from "../uikit/inputs/TextInput.js";

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
      name: "",
      restaurant: "",
      phone: "",
      address: "",
      role: "",
      type: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  handleSelectChange = name => option => {
    this.setState({ [name]: option });
  }

  render() {
    return (
      <div>

        <FormTitle title="About You" />

        <FormRow>
          <FormContainer label="your name">
            <TextInput
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
            <TextInput
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
            <TextInput
              id="phone-number"
              onChange={this.handleInputChange("phone")}
              value={this.state.phone}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="company address">
            <TextInput
              id="company-address"
              onChange={this.handleInputChange("address")}
              value={this.state.address}
              required={true} />
          </FormContainer>
        </FormRow>

        <div className="footer">
          <div className="button prev-button" onClick={this.props.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.props.prevStep}>
            2 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default AboutYou;
