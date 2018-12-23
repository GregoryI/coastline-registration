// Libraries
import React, { Component } from "react";


class Email extends Component {
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
        type="email"
        onBlur={this.onBlur}/>
    );
  }
}

export default Email;
