// Libraries
import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import TextArea from "../uikit/input/TextArea.js";

// Actions
import { saveDelivery } from "../../actions/delivery.js";

// Util
import { SELECT_STYLE } from "../../util/styles.js";
import {
  DELIVERIES_FROM,
  DELIVERIES_TO
} from "../../util/registrationSelectOptions.js";


class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from,
      to: this.props.to,
      instructions: this.props.instructions,
      instructionsHeight: 23
    };
  }

  INSTRUCTIONS_MARGIN = 207;

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  }

  handleSelectChange = name => option => {
    this.setState({ [name]: option });
  }

  onHeightChange = height => {
    this.setState({ instructionsHeight: height });
  }

  saveDelivery = () => {
    const { from, to, instructions } = this.state;
    this.props.saveDelivery(
      from && from.value,
      to && to.value,
      instructions);
  }

  nextStep = () => {
    this.saveDelivery();
    this.props.nextStep();
  }

  prevStep = () => {
    this.saveDelivery();
    this.props.prevStep();
  }

  render() {
    return (
      <div>

        <FormTitle title="Delivery Schedule" />

        <FormRow>
          <FormContainer label="deliveries from">
            <Select
              id="deliveries-from"
              styles={SELECT_STYLE}
              options={DELIVERIES_FROM}
              onChange={this.handleSelectChange("from")}
              value={this.state.from}
              required={true} />
          </FormContainer>

          <FormContainer label="deliveries to">
            <Select
              id="deliveries to"
              styles={SELECT_STYLE}
              options={DELIVERIES_TO}
              onChange={this.handleSelectChange("to")}
              value={this.state.to}
              required={true} />
          </FormContainer>
        </FormRow>

        <FormRow>
          <FormContainer label="special instructions">
            <TextArea
              id="special-instructions"
              onChange={this.handleInputChange("instructions")}
              onHeightChange={this.onHeightChange}
              value={this.state.instructions} />
          </FormContainer>
        </FormRow>

        <div
          style={
            {"height": `${this.INSTRUCTIONS_MARGIN - this.state.instructionsHeight}px`}
          } />

        <div className="footer">
          <div className="button prev-button" onClick={this.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.nextStep}>
            3 of 5
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const from = state.delivery.from;
  const to = state.delivery.to;
  return {
    from: from && DELIVERIES_FROM.find(o => o.value === from),
    to: to && DELIVERIES_TO.find(o => o.value === to),
    instructions: state.delivery.instructions,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveDelivery: (...args) => dispatch(saveDelivery(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
