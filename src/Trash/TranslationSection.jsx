import React from 'react';
import TranslatorTest from './TextDisplayComponent';
import styled from 'styled-components';

// Estilos para a seção de tradução
const TranslationSectionStyled = styled.div`
width: 100%;
background: #f9f9f9;
border-radius: 10px;
padding: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TranslatedText = styled.p`
  color: #333;
  font-size: 18px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

const TranslationSection = ({ text }) => (
    <div>
        <TranslatedText>
            {text || 'Translation will appear here'}
        </TranslatedText>
    </div>
);

export default TranslationSection;
