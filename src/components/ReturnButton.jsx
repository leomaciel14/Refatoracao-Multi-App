import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

// Estiliza o botão de retorno.
const ReturnButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReturnButton = ({ onReturn }) => {
  return (
    <ReturnButtonStyled onClick={onReturn}>
      <FaArrowLeft /> Return
    </ReturnButtonStyled>
  );
};

export default ReturnButton;
