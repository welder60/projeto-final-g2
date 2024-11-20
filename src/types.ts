// src/types.ts


// Tipos para funções de favoritar
export type RemoveFavorite = (movieId: number) => void;
export type Favorite = (movie: Movie) => void;

// Definindo o tipo de dados do usuário
export interface User {
  id: number;
  name: string;
  email: string;
  password?: string; // Defina como opcional se nem todos os contextos exigirem `password`.
}


// Tipagem para o contexto de autenticação
export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (newUserData: User) => void;
}

// Tipagem para o componente FavoritesList
export interface FavoritesListProps {
  favorites: Movie[];
  onRemoveFavorite: RemoveFavorite;
}

// Tipagem para o componente MovieCard
export interface MovieCardProps {
  movie: Movie;
  onFavorite: Favorite;
  isFavorite: boolean;
}

// Representa um filme genérico
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

// Representa a resposta de detalhes de um filme
export interface MovieDetailsResponse {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
}

// Representa a resposta de busca de filmes
export interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
