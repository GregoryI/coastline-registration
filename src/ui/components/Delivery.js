// Libraries
import React, { Component } from "react";
import Select from "react-select";

// UIkit
import { FormTitle, FormRow, FormContainer } from "../uikit/form/index.js";
import TextArea from "../uikit/inputs/TextArea.js";

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
              value={this.state.instructions} />
          </FormContainer>
        </FormRow>

        <div className="footer">
          <div className="button prev-button" onClick={this.props.prevStep}>
            PREVIOUS
          </div>
          <div className="button next-button" onClick={this.props.prevStep}>
            3 of 5
          </div>
        </div>

      </div>
    );
  }
}

export default Delivery;
