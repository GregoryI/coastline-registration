// Libraries
import React, { Component } from "react";


class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password"
    };
  }

  toggleHide = () => {
    this.setState((state) => ({
      type: state.type === "text" ? "password" : "text"
    }));
  }

  render() {
    return (
      <div className="password">
        <input
          className="input"
          {...this.props}
          type={this.state.type} />
        <span className="password-show" onClick={this.toggleHide}>
          {this.state.type === "text" ? "Hide" : "Show"}</span>
      </div>
    );
  }
}

export default Password;
