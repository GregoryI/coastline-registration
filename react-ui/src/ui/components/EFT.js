// Libraries
import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";

// UIkit
import { FormSectionHeader, FormRow, FormContainer } from "../uikit/form/index.js";
import Text from "../uikit/input/Text.js";
import NumberInput from "../uikit/input/Number.js";

// Actions
import { saveBilling } from "../../actions/billing.js";

// Util
import { SELECT_STYLE } from "../../util/styles.js";
import { INSTITUTIONS } from "../../util/registrationSelectOptions.js";


class EFT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: this.props.institution,
      branchAddress: this.props.branchAddress,
      accountNumber: this.props.accountNumber,
      transitNumber: this.props.transitNumber,
    };
  }

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  handleSelectChange = name => option => {
    this.setState({ [name]: option });
  }

  componentWillUnmount() {
    const { institution, branchAddress, accountNumber, transitNumber } = this.state;
    this.props.saveBilling({
      institution: institution && institution.value,
      branchAddress,
      accountNumber,
      transitNumber
    });
  }

  render() {
    return (
      <div>

        <FormSectionHeader header="EFT DEBIT INFORMATION" />

        <FormRow>
          <FormContainer label="financial institution name">
            <Select
              id="financial-institution-name"
              styles={SELECT_STYLE}
              options={INSTITUTIONS}
              onChange={this.handleSelectChange("institution")}
              value={this.state.institution}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="bank branch address">
            <Text
              id="bank-branch-address"
              onChange={this.handleInputChange("branchAddress")}
              value={this.state.branchAddress}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="account number">
            <NumberInput
              id="account-number"
              onChange={this.handleInputChange("accountNumber")}
              value={this.state.accountNumber}
              required={true} />
          </FormContainer>

          <FormContainer label="transit number">
            <NumberInput
              id="transit-number"
              onChange={this.handleInputChange("transitNumber")}
              value={this.state.transitNumber}
              required={true} />
          </FormContainer>
        </FormRow>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const institution = state.billing.institution;
  return {
    institution: institution && INSTITUTIONS.find(o => o.value === institution),
    branchAddress: state.billing.branchAddress,
    accountNumber: state.billing.accountNumber,
    transitNumber: state.billing.transitNumber,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveBilling: (billing) => dispatch(saveBilling(billing))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EFT);
