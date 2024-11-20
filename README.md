# 🎬 Projeto Final G2 - Aplicação de Filmes com TMDB

## 📖 Sobre o Projeto
Este é o projeto final do processo trainee da Orc'estra Gamificação. A aplicação permite que usuários explorem filmes, criem listas de favoritos e visualizem detalhes de cada título. Construída com React e utilizando a API **The Movie Database (TMDB)**, a plataforma é projetada para ser intuitiva, responsiva e funcional.

---

## 🚀 Funcionalidades
- **Gerenciamento de Conta:**
  - Cadastro, login e logout de usuários.
  - Edição e exclusão de conta.
  - Sessões gerenciadas via **LocalStorage**.
- **Exploração de Filmes:**
  - Exibição de categorias como "Now Playing" e "Top Rated".
  - Busca e filtros por título ou data de lançamento.
  - Página de detalhes com informações completas e elenco.
- **Lista de Favoritos:**
  - Adicionar e remover filmes da lista de favoritos.
  - Visualização completa dos favoritos do usuário.

---

## 🛠️ Tecnologias Utilizadas
- **Linguagem:** JavaScript
- **Framework:** React
- **Gerenciamento de Estado:** Context API
- **Comunicação com API:** Axios
- **Deploy:** Vercel

---

## 🔧 Configuração do Projeto

### **Pré-requisitos**
- Node.js (versão LTS recomendada)
- npm ou yarn

### **Passos para Rodar Localmente**
1. Clone o repositório:
   ```bash
   git clone https://github.com/welder60/projeto-final-g2.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-final-g2
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` com as credenciais da API TMDB:
   ```env
   REACT_APP_API_URL=https://api.themoviedb.org/3
   REACT_APP_API_KEY=sua_chave_da_api
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 🌐 Deploy
A aplicação está disponível online no [Vercel](#). *(https://projeto-final-g2.vercel.app/)*

---

## 📂 Estrutura do Projeto
```plaintext
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── FavoritesList.jsx
├── pages/
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── services/
│   ├── api.js
│   └── localStorageService.js
├── context/
│   └── AuthContext.jsx
├── styles/
│   └── global.css
└── App.jsx
```

---

## 🤝 Contribuidores
- Caio Ferreira Duarte
- Alan Semil dos Santos Vieira
- Vinícius Araújo Oliveira
- Welder Rodrigues de Medeiros
- Nelson Boris Sèdjro LINDJI

---

## 📜 Licença
Este projeto é de uso educacional e faz parte do processo trainee da Orc'estra Gamificação. Não deve ser utilizado para fins comerciais.

---
