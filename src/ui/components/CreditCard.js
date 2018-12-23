// Libraries
import React, { Component } from "react";

// UIkit
import { FormSectionHeader, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";
import NumberInput from "../uikit/input/Number.js";


class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      nameOnCard: "",
      expiry: "",
      cvc: "",
    };
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  render() {
    return (
      <div>

        <FormSectionHeader header="Credit Card Information" />

        <FormRow>
          <FormContainer label="credit card number">
            <NumberInput
              id="credit-card-number"
              onChange={this.handleInputChange("cardNumber")}
              value={this.state.cardNumber}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="name on credit card">
            <Text
              id="name-on-credit-card"
              onChange={this.handleInputChange("nameOnCard")}
              value={this.state.nameOnCard}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="expiry (mm-yyyy)">
            <NumberInput
              id="expiry-(mm-yyyy)"
              onChange={this.handleInputChange("expiry")}
              value={this.state.expiry}
              required={true}
              maxLength={9}/>
          </FormContainer>

          <FormContainer label="cvv/cvc">
            <NumberInput
              id="cvv/cvc"
              onChange={this.handleInputChange("cvc")}
              value={this.state.cvc}
              required={true}
              maxLength={4} />
          </FormContainer>
        </FormRow>

      </div>
    );
  }
}

export default CreditCard;
