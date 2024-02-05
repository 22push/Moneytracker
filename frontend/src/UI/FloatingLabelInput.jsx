// FloatingLabelInput.jsx

import React, { useState } from 'react';
import './FloatingLabelInput.css';

const FloatingLabelInput = ({ label, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={`floating-label-input ${focused ? 'focused' : ''}`}>
      <label>{label}</label>
      <input
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelInput;
