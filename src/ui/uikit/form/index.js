// Libraries
import React from "react";


export const FormTitle = ({ title }) => {
  return (
    <div className="title">
      {title}
    </div>
  );
};

export const FormRow = ({ children }) => {
  return (
    <div className="form-row">
      {children}
    </div>
  );
};

export const FormContainer = ({ label, children }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={label.replace(" ", "-")}>
        {label}
      </label>
      {children}
    </div>
  );
};


