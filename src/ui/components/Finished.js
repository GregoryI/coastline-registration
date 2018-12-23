// Libraries
import React from "react";

// UIkit
import { FormTitle, FormHeader } from "../uikit/form/index.js";

// Util
import { SUCCESS_THANKS, FOLLOW_UP } from "../../util/strings.js";

export default ({prevStep}) => (
  <div>

    <FormTitle title="All Done!"/>

    <FormHeader header={SUCCESS_THANKS} />

    <FormHeader header={FOLLOW_UP} />

    <a
      className="button next-button send-email-button"
      href="mailto:sales@coastlinemarket.com">
      CONTACT SALES REP
    </a>

  </div>
);
