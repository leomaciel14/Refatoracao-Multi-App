import React from 'react';
import { useTranslation } from 'react-google-multi-lang';
import styled from 'styled-components';

// Estilo para o container do switcher
const SwitcherContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

// Estilo para o título do switcher
const SwitcherTitle = styled.h3`
color: #333;
margin-bottom: 10px;
font-size: 20px;
text-align: center;
`;

// Estilo para o seletor de idiomas
const LanguageSelect = styled.select`
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
transition: border-color 0.3s;

&:focus {
border-color: #007bff;
outline: none;
}
`;

const CustomLanguageSwitcher = ({ languages }) => {
    const { setLanguage } = useTranslation();

    return (
        <SwitcherContainer>
            <SwitcherTitle>Select Language</SwitcherTitle>
            <LanguageSelect onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </LanguageSelect>
        </SwitcherContainer>
    );
};

export default CustomLanguageSwitcher;
