import React, {PropTypes} from 'react';

const TextAreaInput = ({name, label, onChange, value, error}) => {
  let wrapperClass = 'form-group';
  let textareaClass = 'form-control';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
        <textarea
          className={textareaClass}
          rows="5"
          name={name}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaInput;
