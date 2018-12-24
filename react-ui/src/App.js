// Libraries
import React, { Component } from "react";

// Components
import RegistrationController from "./ui/components/RegistrationController.js";

// CSS
// import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="app app-content">
        <RegistrationController />
      </div>
    );
  }
}

export default App;
