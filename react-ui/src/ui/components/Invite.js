// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// UIkit
import {
  FormTitle,
  FormHeader,
  FormRow,
  FormContainer
} from "../uikit/form/index.js";
import Email from "../uikit/input/Email.js";
import GraphicButton from "../uikit/image/GraphicButton.js";

// Actions
import { saveEmails, submitRegistration } from "../../actions/invite.js";


class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: this.props.emails,
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

  saveEmails = () => {
    this.props.saveEmails(this.state.emails);
  }

  nextStep = () => {
    this.saveEmails();
    this.props.submitRegistration()
      .then((success) => {
        if (success) {
          this.props.nextStep();
        }
      });
  }

  prevStep = () => {
    this.saveEmails();
    this.props.prevStep();
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
          <div className="button prev-button" onClick={this.prevStep}>
            PREVIOUS
          </div>

          <div className="button next-button" onClick={this.nextStep}>
            SUBMIT
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { emails: state.invite.emails };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveEmails: (emails) => dispatch(saveEmails(emails)),
    submitRegistration: () => dispatch(submitRegistration())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
