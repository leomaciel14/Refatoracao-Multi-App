import React from "react";
import styled from "styled-components";

// Estiliza o rodapé do aplicativo.
const FooterStyled = styled.div`
width: 100%;
background-color: #2c3e50;
color: white;
text-align: center;
padding: 10px 0;
position: absolute;
bottom: 0;

@media (max-width: 768px) {
  padding: 5px 0;
  font-size: 12px;
}`;

const Footer = () => {
    return (
        < FooterStyled >© 2024 Your Company | All rights reserved</FooterStyled >
    )


};

export default Footer;