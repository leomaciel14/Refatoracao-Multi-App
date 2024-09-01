import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import QRCodeGenerator from "./pages/QRCodeGenarator";
import IPAddressFinder from "./pages/IPAddressFinder";
import MovieSearchEngine from "./pages/MovieSearchEngine";
import TodoApp from "./pages/TodoApp";
import QuizApp from "./pages/QuizApp";
import LanguageTranslator from "./pages/LanguageTranslator";
import Translation from "./Trash/Translation";


import Login from "./components/Login";
import AppCarousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReturnButton from "./components/ReturnButton";

import "./App.css";

// Estilização do contêiner principal do aplicativo
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estilização do conteúdo principal do aplicativo
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0); // Estado para o índice do carrossel
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qrcode-generator");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  // Função para definir o componente atual e o índice do carrossel
  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  const handleReturn = () => {
    setCurrentComponent(null); // Reseta o componente atual para mostrar o carrossel novamente
  };

  return (
    <AppContainer>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <Navbar handleLogout={handleLogout} />
          <MainContent>
            {currentComponent ? (
              <>
                {renderComponent()}
                <ReturnButton onReturn={handleReturn} />
              </>
            ) : (
              <AppCarousel
                handleAccess={handleAccess}
                carouselIndex={carouselIndex}
              />
            )}
          </MainContent>
        </>
      )}
      <Footer />
    </AppContainer>
  );
};

export default App;
