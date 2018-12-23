// Libraries
import React, { Component } from "react";


class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    return (
      <textarea
        className="input"
        {...this.props} />
    );
  }
}

export default TextArea;
