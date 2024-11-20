// Salvar um item no LocalStorage
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Buscar um item do LocalStorage
export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// Remover um item do LocalStorage
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Exemplo: Gerenciar a lista de favoritos
export const addToFavorites = (movie) => {
  const favorites = getFromLocalStorage('favorites') || [];
  saveToLocalStorage('favorites', [...favorites, movie]);
};

export const removeFromFavorites = (movieId) => {
  const favorites = getFromLocalStorage('favorites') || [];
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  saveToLocalStorage('favorites', updatedFavorites);
};
