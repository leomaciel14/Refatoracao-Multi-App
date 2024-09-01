# Refatoração Multi App

Este é um aplicativo multifuncional desenvolvido em React, que oferece uma variedade de ferramentas e utilitários para diferentes propósitos. O aplicativo permite que os usuários façam login e acessem várias funcionalidades, cada uma com seu próprio conjunto de características.

## Funcionalidades

- **QRCode Generator**: Gere códigos QR a partir de textos ou URLs fornecidos.
- **IP Address Finder**: Encontre informações sobre endereços IP.
- **Movie Search Engine**: Pesquise informações sobre filmes usando uma API de filmes.
- **Todo App**: Gerencie suas tarefas com uma lista de tarefas simples.
- **Quiz App**: Participe de quizzes interativos sobre diversos tópicos.
- **Language Translator**: Traduza textos entre diferentes idiomas.

## Usuários Disponíveis para Teste

- **Admin**:
  - Username: `admin`
  - Password: `admin`
  - Token: `token123`

- **User1**:
  - Username: `user1`
  - Password: `password1`
  - Token: `token456`

- **User2**:
  - Username: `user2`
  - Password: `password2`
  - Token: `token789`

- **Guest**:
  - Username: `guest`
  - Password: `guest`
  - Token: `token000`

## Melhorias Recentes

- **Modularização**: Reestruturação do código em módulos distintos para melhorar a manutenção e a legibilidade. Componentes, páginas, serviços e utilitários foram separados.
- **Tratamento de Erros**: Implementação de um tratamento de erros melhorado, garantindo que o aplicativo lide com erros de forma clara e amigável para o usuário.
- **Validação de Dados**: Validação dos dados JSON recebidos e enviados para garantir que estejam corretos e completos.
- **Autenticação com JWT**: Implementação de JWT para autenticação, protegendo rotas sensíveis no front-end.

## Melhorias Futuras

### Requisitos Mínimos

- **Interação com API**: Melhorar a interação com APIs, garantindo que as requisições sejam eficientes e seguras.
- **Qualidade de Código e Melhores Práticas**:
  - **Revisões de Código**: Estabelecer um processo de revisão de código para garantir qualidade e consistência.
  - **Documentação**: Continuar melhorando a documentação do código utilizando comentários claros e mantendo um README detalhado.
- **Desempenho e Escalabilidade**: Implementar melhorias de desempenho e planejar a escalabilidade do aplicativo.

### Diferenciais Extras e Opcionais

- **Uso de Padrões de Projeto**: Aplicar padrões de projeto simples como Singleton e Factory onde for adequado.
- **OAuth2**: Integrar autenticação com provedores de identidade de terceiros (Google, Facebook, etc.).
- **Cache**: Implementar cache no front-end para melhorar a performance, armazenando dados frequentemente acessados no `localStorage` ou `sessionStorage`.
- **Lazy Loading**: Utilizar lazy loading para carregar componentes e recursos sob demanda, melhorando o tempo de carregamento inicial da aplicação.
- **Substituição de APIs**: Considerar a substituição da API do OMDB pela API do TMDB para buscar informações sobre filmes, se aplicável ao projeto.

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/leomaciel14/Refatoracao-Multi-App
   cd Refatoracao-Multi-App
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:
   ```bash
   npm start
   ```

4. **Acesse o Aplicativo**:

   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório, crie uma branch para sua feature ou correção, e envie um pull request.

Este projeto foi desenvolvido como um exercício de aprendizado em React e gerenciamento de estado. Agradecemos por explorar e contribuir!