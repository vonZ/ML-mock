/**
  Stateless functional component
**/

import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  let inputClass = 'form-control';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  if (name == "Date") {
    inputClass += " " + 'js-datepicker';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
