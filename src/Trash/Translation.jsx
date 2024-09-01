import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-google-multi-lang';
import CustomLanguageSwitcher from './CustomLanguageSwitcher';
import InputSection from './InputSection';
import TranslationSection from './TranslationSection';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
background: #fff;
border-radius: 15px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
max-width: 800px;
margin: 50px auto;
`;

const Title = styled.h2`
color: #333;
margin-bottom: 20px;
font-size: 24px;
text-align: center;
`;

const Translation = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const { language, setLanguage, translateText } = useTranslation();

    useEffect(() => {
        const performTranslation = async () => {
            if (text) {
                try {
                    const translated = await translateText(text, language);
                    setTranslatedText(translated);
                } catch (error) {
                    console.error("Error translating text:", error);
                }
            }
        };

        performTranslation();
    }, [text, language, translateText]);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'pt', name: 'Portuguese' },
    ];

    const handleLanguageChange = (newLang) => {
        setLanguage(newLang);
    };

    return (
        <Container>
            <Title>Translation Tool</Title>
            <CustomLanguageSwitcher languages={languages} onLanguageChange={handleLanguageChange} />
            <InputSection setText={setText} />
            <TranslationSection text={translatedText} />
        </Container>
    );
};

export default Translation;
