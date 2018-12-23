// Libraries
import React, { Component } from "react";
import Select from "react-select";

// Components
import EFT from "./EFT.js";
import CreditCard from "./CreditCard.js";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";

// Util
import { TERMS_TEXT } from "../../util/strings.js";
import { SELECT_STYLE } from "../../util/styles.js";
import {
  PAYMENT_METHODS,
  ACCOUNTING_TERMS
} from "../../util/registrationSelectOptions.js";


class Accounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: PAYMENT_METHODS[0],
      terms: "",
      accountingEmail: "",
    };
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  handleSelectChange = name => option => {
    this.setState({ [name]: option });
  }

  renderPaymentInformation = () => {
    switch(this.state.payment) {
      case PAYMENT_METHODS[0]:
        return <EFT />;
      case PAYMENT_METHODS[1]:
        return <CreditCard />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>

        <FormTitle title="Accounting Setup" />

        <FormRow>
          <FormContainer label="payment method">
            <Select
              id="payment-method"
              styles={SELECT_STYLE}
              options={PAYMENT_METHODS}
              onChange={this.handleSelectChange("payment")}
              value={this.state.payment}
              required={true} />
          </FormContainer>

          <FormContainer label="requested terms">
            <Select
              id="requested-terms"
              styles={SELECT_STYLE}
              options={ACCOUNTING_TERMS}
              onChange={this.handleSelectChange("terms")}
              value={this.state.terms}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="accounting email">
            <Text
              id="accounting-email"
              onChange={this.handleInputChange("accountingEmail")}
              value={this.state.accountingEmail}
              required={true} />
          </FormContainer>
        </FormRow>

        { this.renderPaymentInformation() }

        <p className="disclaimer">{TERMS_TEXT}</p>

        <div className="footer">
          <div className="button prev-button" onClick={this.props.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.props.nextStep}>
            4 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default Accounting;
