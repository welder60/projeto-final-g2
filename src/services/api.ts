import axios from 'axios';
import { Movie, MovieDetailsResponse, SearchMoviesResponse } from '../types';

// Configuração da URL base e parâmetros padrão
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'pt-BR',
  },
});

// Funções para chamadas específicas
export const getMoviesByCategory = async (category: string): Promise<Movie[]> => {
  const response = await api.get<{ results: Movie[] }>(`/movie/${category}`);
  return response.data.results;
};

export const getMovieDetails = async (movieId: string): Promise<MovieDetailsResponse> => {
  const response = await api.get<MovieDetailsResponse>(`/movie/${movieId}`);
  return response.data;
};

export const searchMovies = async (query: string): Promise<SearchMoviesResponse> => {
  const response = await api.get<SearchMoviesResponse>('/search/movie', {
    params: { query },
  });
  return response.data;
};

export default api;
