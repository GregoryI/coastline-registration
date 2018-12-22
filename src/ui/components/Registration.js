// Libraries
import React, { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      confirm: "",
    }
  }

  render() {
    return (
      <div>
        <p className="title">Registration</p>
      </div>
    );
  }
}

export default Registration;
