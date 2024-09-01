import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;
background: #fff;
border-radius: 15px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
max-width: 500px;
margin: 50px auto;
`;

const Title = styled.h2`
color: #333;
margin-bottom: 20px;
font-size: 24px;
text-align: center;
`;

const Question = styled.p`
color: #555;
font-size: 20px;
margin-bottom: 20px;
text-align: center;
`;

const OptionButton = styled.button`
padding: 12px 20px;
background-color: ${({ isCorrect, isSelected }) =>
isSelected ? (isCorrect ? '#28a745' : '#dc3545') : '#007bff'};
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
margin: 10px;
transition: background-color 0.3s, transform 0.3s;

&:hover {
background-color: ${({ isCorrect, isSelected }) =>
isSelected ? (isCorrect ? '#218838' : '#c82333') : '#0056b3'};
transform: scale(1.05);
}

&:active {
transform: scale(0.95);
}
`;

const Score = styled.p`
color: #333;
font-size: 20px;
margin-top: 20px;
text-align: center;
`;

const RestartButton = styled.button`
padding: 10px 20px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
margin-top: 20px;
transition: background-color 0.3s;

&:hover {
background-color: #0056b3;
}
`;

const QuizApp = () => {
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedOption, setSelectedOption] = useState(null);

const questions = [
{
question: "What is 2+2?",
options: ["3", "4", "5", "6"],
answer: "4",
},
{
question: "What is 3+3?",
options: ["5", "6", "7", "8"],
answer: "6",
},
];

const handleAnswer = (option) => {
setSelectedOption(option);
if (option === questions[currentQuestion].answer) {
setScore(score + 1);
}
setTimeout(() => {
setSelectedOption(null);
setCurrentQuestion(currentQuestion + 1);
}, 1000); // Aguarda 1 segundo antes de passar para a próxima pergunta
};

const restartQuiz = () => {
setScore(0);
setCurrentQuestion(0);
setSelectedOption(null);
};

return (
<Container>
<Title>Quiz App</Title>
{currentQuestion < questions.length ? (
<div>
<Question>{questions[currentQuestion].question}</Question>
{questions[currentQuestion].options.map((option) => (
<OptionButton
key={option}
onClick={() => handleAnswer(option)}
isCorrect={option === questions[currentQuestion].answer}
isSelected={selectedOption === option}
>
{option}
</OptionButton>
))}
</div>
) : (
<>
<Score>Your score: {score}</Score>
<RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>
</>
)}
</Container>
);
};

export default QuizApp;
