// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// UIkit
import { FormSectionHeader, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";
import NumberInput from "../uikit/input/Number.js";
import MaskedInput from "../uikit/input/MaskedInput.js";

// Actions
import { saveBilling } from "../../actions/billing.js";


class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: this.props.cardNumber,
      nameOnCard: this.props.nameOnCard,
      expiry: this.props.expiry,
      cvc: this.props.cvc,
    };
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  componentWillUnmount() {
    const { cardNumber, nameOnCard, expiry, cvc } = this.state;
    this.props.saveBilling({ cardNumber, nameOnCard, expiry, cvc });
  }

  render() {
    return (
      <div>

        <FormSectionHeader header="Credit Card Information" />

        <FormRow>
          <FormContainer label="credit card number">
            <MaskedInput
              id="credit-card-number"
              mask={[/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]}
              placeholder="4242 4242 4242 4242"
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
            <MaskedInput
              id="expiry-(mm-yyyy)"
              mask={[/\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
              onChange={this.handleInputChange("expiry")}
              value={this.state.expiry}
              required={true}/>
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

const mapStateToProps = (state, ownProps) => {
  const { cardNumber, nameOnCard, expiry, cvc } = state.billing;
  return { cardNumber, nameOnCard, expiry, cvc };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveBilling: (billing) => dispatch(saveBilling(billing))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
