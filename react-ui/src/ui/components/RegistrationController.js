// Libraries
import React, { Component } from "react";

// Components
import Registration from "./Registration.js";
import AboutYou from "./AboutYou.js";
import Delivery from "./Delivery.js";
import Accounting from "./Accounting.js";
import Invite from "./Invite.js";
import Finished from "./Finished.js";

class RegistrationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      furthestStep: 1
    };
  }

  nextStep = () => {
    this.setState((state) => ({
      step: state.step + 1,
      furthestStep: Math.max(state.step + 1, state.furthestStep)
    }));
  }

  prevStep = () => {
    this.setState((state) => ({
      step: state.step - 1
    }));
  }

  render() {
    return (
      <div className="module">
        {
          {
            1: <Registration nextStep={this.nextStep}/>,
            2: <AboutYou nextStep={this.nextStep} prevStep={this.prevStep}/>,
            3: <Delivery nextStep={this.nextStep} prevStep={this.prevStep}/>,
            4: <Accounting nextStep={this.nextStep} prevStep={this.prevStep}/>,
            5: <Invite nextStep={this.nextStep} prevStep={this.prevStep}/>,
            6: <Finished prevStep={this.prevStep}/>
          }[this.state.step]
        }
      </div>
    );
  }
}

export default RegistrationController;
