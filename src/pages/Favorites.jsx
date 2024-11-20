import React, { useState, useEffect } from 'react';
import { getFromLocalStorage, removeFromLocalStorage } from '../services/localStorageService';
import FavoritesList from '../components/FavoritesList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Carrega os favoritos do localStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = getFromLocalStorage('favorites') || [];
    setFavorites(storedFavorites);
  }, []);

  // Função para remover um filme da lista de favoritos
  const handleRemoveFavorite = (movieId) => {
    // Filtra o filme com base no id e remove da lista de favoritos
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);

    // Atualiza a lista de favoritos no estado
    setFavorites(updatedFavorites);

    // Salva a lista atualizada de favoritos no localStorage
    removeFromLocalStorage('favorites');
    saveToLocalStorage('favorites', updatedFavorites);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
      <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
};

export default Favorites;
