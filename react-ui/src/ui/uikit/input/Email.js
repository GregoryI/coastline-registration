// Libraries
import React, { Component } from "react";
import ReactMaskedInput from "react-text-mask";
import emailMask from "text-mask-addons/dist/emailMask";


class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    return (
      <ReactMaskedInput
        className="input"
        mask={emailMask}
        {...this.props} />
    );
  }
}

export default Email;
