// TranslatorTest.jsx

import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-google-multi-lang';

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

const TranslatorTest = ({ translatedText }) => {
    return (
        <TranslatedText>
            {translatedText || 'Translation will appear here'}
        </TranslatedText>
    );
};

export default withTranslation(TranslatorTest);
