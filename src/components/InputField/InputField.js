/* eslint-disable react/jsx-indent */
import React from 'react';
import styled from 'styled-components';

function InputField({
  className, placeholder, value, onChange, name, pattern,
}) {
  return (
    <input
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      type="text"
      pattern={pattern}
      onChange={(e) => onChange(e.target.value)}
    />
    // eslint-disable-next-line indent
  );
}

const StyledInputField = styled(InputField)`
  background-color: #F3F4F6;
  font-size: 1.5rem;
  margin: 20px 0;
  border-radius: 5px;
  border: 0;
  padding: 5px;
`;

export default StyledInputField;
