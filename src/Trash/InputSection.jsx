import React from 'react';
import styled from 'styled-components';

const InputSection = ({ setText }) => {

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <InputSectionStyled>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Type something to translate"
          />
        </InputSectionStyled>
      </div>
    </>
  )
};

const InputSectionStyled = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default InputSection;
