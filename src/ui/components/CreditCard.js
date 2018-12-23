// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// UIkit
import { FormSectionHeader, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";
import NumberInput from "../uikit/input/Number.js";

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
    console.log("SAVING", expiry);
    this.props.saveBilling({ cardNumber, nameOnCard, expiry, cvc });
  }

  render() {
    console.log(this.state.expiry);
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
            <Text
              id="expiry-(mm-yyyy)"
              onChange={this.handleInputChange("expiry")}
              value={this.state.expiry}
              required={true}
              maxLength={9}
              type="text"
              pattern="[0-9\-]+"/>
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
  console.log(expiry);
  return { cardNumber, nameOnCard, expiry, cvc };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveBilling: (billing) => dispatch(saveBilling(billing))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
