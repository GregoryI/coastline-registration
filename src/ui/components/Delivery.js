// Libraries
import React, { Component } from "react";
import Select from "react-select";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import TextArea from "../uikit/input/TextArea.js";

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
      from: "",
      to: "",
      instructions: "",
      instructionsHeight: 23
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onHeightChange = this.onHeightChange.bind(this);
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
          <div className="button prev-button" onClick={this.props.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.props.nextStep}>
            3 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default Delivery;
