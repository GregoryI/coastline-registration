// Libraries
import React from "react";

export const FormTitle = ({ title }) => {
  return (
    <div className="form-title">
      {title}
    </div>
  );
};

export const FormHeader = ({ header }) => {
  return (
    <div className="form-header">
      {header}
    </div>
  );
};

export const FormSectionHeader = ({ header }) => {
  return (
    <div className="form-section-header">
      {header}
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
      <label className="input-label" htmlFor={label.replace(/ /g, "-")}>
        {label}
      </label>
      {children}
    </div>
  );
};


