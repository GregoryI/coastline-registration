// Libraries
import React, { Component } from "react";


class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    return (
      <input
        className="input"
        {...this.props}
        type="number" />
    );
  }
}

export default NumberInput;
