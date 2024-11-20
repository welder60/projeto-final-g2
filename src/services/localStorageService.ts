// Tipagem do filme
import { Movie } from '../types';

// Salvar um item no LocalStorage
export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Buscar um item do LocalStorage
export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// Remover um item do LocalStorage
export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

// Adicionar um filme à lista de favoritos
export const addToFavorites = (movie: Movie): void => {
  const favorites: Movie[] = getFromLocalStorage<Movie[]>('favorites') || [];
  saveToLocalStorage('favorites', [...favorites, movie]);
};

// Remover um filme da lista de favoritos
export const removeFromFavorites = (movieId: number): void => {
  const favorites: Movie[] = getFromLocalStorage<Movie[]>('favorites') || [];
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  saveToLocalStorage('favorites', updatedFavorites);
};
