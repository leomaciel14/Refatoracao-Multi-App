import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes

// Define o estilo do container principal
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;
background: #fff;
border-radius: 15px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
max-width: 600px;
margin: 50px auto;
`;

// Define o estilo do título
const Title = styled.h2`
color: #333;
margin-bottom: 20px;
font-size: 24px;
text-align: center;
`;

// Define o estilo do label
const Label = styled.label`
color: #555;
font-size: 16px;
margin-right: 10px;
`;

// Define o estilo do select
const Select = styled.select`
margin-bottom: 20px;
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

// Define o estilo do campo de entrada
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

// Define o estilo do botão
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

// Define o estilo do texto traduzido
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

// Componente principal LanguageTranslator
const LanguageTranslator = ({ apiKey }) => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino

  // Função para traduzir o texto usando a API do Google Translate
  const translateText = async () => {
    try {
      if (!text.trim()) {
        alert("Please enter text to translate.");
        return;
      }

      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text'
        }),
      });

      const data = await response.json();
      if (data && data.data && data.data.translations) {
        setTranslatedText(data.data.translations[0].translatedText);
      } else {
        throw new Error("Translation failed");
      }
    } catch (error) {
      console.error("Error translating text:", error);
      alert("An error occurred while translating the text.");
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <Button onClick={translateText}>Translate</Button>
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
    </Container>
  );
};

function Translation() {
  const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;

  if (!apiKey) {
    console.error("API Key is missing. Please check your environment variables.");
    return <div>Error: API Key is missing.</div>;
  }

  return <LanguageTranslator apiKey={apiKey} />;
}

export default Translation;
