// Libraries
import React, { Component } from "react";
import ReactMaskedInput from "react-text-mask";


class MaskedInput extends Component {
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
        {...this.props} />
    );
  }
}

export default MaskedInput;
