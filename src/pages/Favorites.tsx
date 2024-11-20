import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../services/localStorageService';
import { Movie } from '../types'; // Certifique-se de importar a interface correta
import FavoritesList from '../components/FavoritesList';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]); // Estado tipado como um array de filmes

  // Carrega os favoritos do localStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = getFromLocalStorage<Movie[]>('favorites');
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, []);

  // Função para remover um filme da lista de favoritos
  const handleRemoveFavorite = (movieId: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    saveToLocalStorage('favorites', updatedFavorites);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
      {favorites.length > 0 ? (
        <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
      ) : (
        <p className="text-gray-500">Você ainda não adicionou filmes aos favoritos.</p>
      )}
    </div>
  );
};

export default Favorites;
