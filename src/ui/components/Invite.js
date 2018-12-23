// Libraries
import React, { Component } from "react";

// UIkit
import {
  FormTitle,
  FormHeader,
  FormRow,
  FormContainer
} from "../uikit/form/index.js";
import Email from "../uikit/input/Email.js";
import GraphicButton from "../uikit/image/GraphicButton.js";


class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: ["", ""],
    };
  }

  handleInputChange = index => evt => {
    let emails = this.state.emails;
    emails[index] = evt.target.value;
    this.setState({ emails });
  }

  addEmail = () => {
    this.setState((state) => (
      { emails: [...state.emails, ""] }
    ));
  }

  render() {
    return (
      <div>

        <FormTitle title="Invite" />

        <FormHeader header="Invite other members of your team to join." />

        { this.state.emails.map((email, i) => (
          <FormRow key={i}>
            <FormContainer label={`email #${i + 1}`}>
              <Email
                id={`email-#${i + 1}`}
                placeholder="Optional"
                onChange={this.handleInputChange(i)}
                value={this.state.emails[i]}
                required={true} />
            </FormContainer>
          </FormRow>))
        }

        <div className="add-email-button" onClick={this.addEmail}>
          <GraphicButton img="Plus" title="Add Email" className="graphic-button"/>
          Email
        </div>

        <div className="footer">
          <div className="button prev-button" onClick={this.props.prevStep}>
            PREVIOUS
          </div>

          <div className="button next-button" onClick={this.props.nextStep}>
            SUBMIT
          </div>
        </div>

      </div>
    );
  }
}

export default Invite;
