import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaQrcode, FaSearch, FaTasks, FaRegQuestionCircle, FaGlobeAmericas, FaNetworkWired, FaBars } from "react-icons/fa";

// Estilo da barra de navegação
const NavBar = styled.div`
  width: 240px;
  background-color: #161e27;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);
  z-index: 99;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

// Estiliza o botão de alternância da barra de navegação.
const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledButton = styled.button`
margin-top: 20px;
color: white;
background-color: transparent;
border: 1px solid white;
border-radius: full;
width: 90%;
transition: background-color 0.3s;

&:hover {
background-color: rgba(255, 255, 255, 0.1);
}
`;

const Navbar = ({ handleAccess, handleLogout }) => {

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    // Alterna a visibilidade da barra de navegação.
    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
    };

    return (
        <>
            <NavBarToggle onClick={toggleNavBar}>
                <FaBars id="FaBars"
                    size={24}
                    color={isNavBarOpen ? '#ffffff' : '#000000'} />
            </NavBarToggle>
            <NavBar isOpen={isNavBarOpen}>
                <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
                    <FaQrcode />
                    QR Code Generator
                </StyledLink>
                <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
                    <FaNetworkWired />
                    IP Address Finder
                </StyledLink>
                <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
                    <FaSearch />
                    Movie Search
                </StyledLink>
                <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
                    <FaTasks />
                    Todo App
                </StyledLink>
                <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
                    <FaRegQuestionCircle />
                    Quiz App
                </StyledLink>
                <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
                    <FaGlobeAmericas />
                    Translator
                </StyledLink>
                <StyledButton onClick={handleLogout}>
                    Logout
                </StyledButton>
            </NavBar>
        </>
    );
};

export default Navbar;
