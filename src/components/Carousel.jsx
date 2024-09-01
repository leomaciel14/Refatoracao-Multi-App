import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
`;

const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

const CarouselItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative; /* Para posicionar o pseudo-elemento */
background: linear-gradient(135deg, #6a5fff, #9a7bfe);
padding: 40px;
border-radius: 15px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
text-align: center;
height: 100%;
width: 100%;
overflow: hidden; /* Para garantir que o pseudo-elemento não transborde */

&:before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(135deg, #3e30ff, #8235ff);
transition: opacity 1s;
opacity: 0;
border-radius: 15px;
}

&:hover:before {
opacity: 1;
}

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
    z-index:98;
  }

  button {
    padding: 15px 30px;
    background-color: #ffffff;
    color: #5e0969;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    z-index:98;
    transition: background-color 0.3s;

    &:hover {
      background-color: #dbdbdb;
    }
  }
`;

const AppCarousel = ({ handleAccess, carouselIndex }) => (
  <CarouselContainer>
    <CustomCarousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      selectedItem={carouselIndex} // Define o item selecionado com base no estado
      showThumbs={false}
    >
      <CarouselItem>
        <h2>QR Code Generator</h2>
        <button onClick={() => handleAccess(0, "QRCodeGenerator")}>Acessar</button>
      </CarouselItem>
      <CarouselItem>
        <h2>IP Address Finder</h2>
        <button onClick={() => handleAccess(1, "IPAddressFinder")}>Acessar</button>
      </CarouselItem>
      <CarouselItem>
        <h2>Movie Search Engine</h2>
        <button onClick={() => handleAccess(2, "MovieSearchEngine")}>Acessar</button>
      </CarouselItem>
      <CarouselItem>
        <h2>Todo App</h2>
        <button onClick={() => handleAccess(3, "TodoApp")}>Acessar</button>
      </CarouselItem>
      <CarouselItem>
        <h2>Quiz App</h2>
        <button onClick={() => handleAccess(4, "QuizApp")}>Acessar</button>
      </CarouselItem>
      <CarouselItem>
        <h2>Language Translator</h2>
        <button onClick={() => handleAccess(5, "LanguageTranslator")}>Acessar</button>
      </CarouselItem>
    </CustomCarousel>
  </CarouselContainer>
);

export default AppCarousel;
