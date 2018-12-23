// Libraries
import React, { Component } from "react";
import Textarea from "react-textarea-autosize";


class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    return (
      <Textarea
        maxRows={9}
        className="input"
        {...this.props} />
    );
  }
}

export default TextArea;
