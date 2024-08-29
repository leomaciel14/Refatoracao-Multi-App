import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

// Estilização do container principal do login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estilização do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilização do campo de entrada
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

// Estilização do botão
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Esquema de validação usando Yup
const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Password é obrigatório'),
});

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
    try {
    await loginSchema.validate({ username, password });
    
    const response = await axios.post('https://api.example.com/auth/login', {
    username,
    password,
    });
    
    const { token } = response.data;
    localStorage.setItem('token', token);
    onLogin();
    } catch (err) {
    if (err.name === 'ValidationError') {
    setError(err.message);
    } else if (err.response && err.response.status === 401) {
    setError('Credenciais inválidas');
    } else {
    setError('Erro no servidor. Tente novamente mais tarde.');
    }
    }
    };
    

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;