// Libraries
import React, { Component } from 'react';

// Components
import Registration from "./Registration.js";

class RegistrationController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      furthestStep: 1
    }
  }

  nextStep = () => {
    this.setState((state) => ({
      step: state.step + 1
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
            2: <Registration nextStep={this.nextStep}/>
          }[this.state.step]
        }
        {/*
          switch (this.state.step) {
            case 1:
              return <Registration nextStep={this.nextStep}/>
            case 2:
              return <AboutYou />
            case 3:
              return <Delivery />
            case 4:
              return <Accounting />
            case 5:
              return <Referral />
            case 6:
              return <Success />
          }
        */}
      </div>
    );
  }
}

export default RegistrationController;
