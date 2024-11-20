import axios from 'axios';

// Configuração da URL base e parâmetros padrão
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Usando import.meta.env
  params: {
    api_key: import.meta.env.VITE_API_KEY, // Usando import.meta.env
    language: 'pt-BR',  // Define o idioma para Português (Brasil)
  },
});

// Funções para chamadas específicas
export const getMoviesByCategory = (category) => api.get(`/movie/${category}`);
export const getMovieDetails = (movieId) => api.get(`/movie/${movieId}`);
export const searchMovies = (query) =>
  api.get('/search/movie', {
    params: { query },
  });

export default api;
