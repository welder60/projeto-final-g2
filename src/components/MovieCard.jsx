import React, { useState } from 'react';

const MovieCard = ({ movie, onFavorite, isFavorite }) => {
  const [isMovieFavorited, setIsMovieFavorited] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setIsMovieFavorited(!isMovieFavorited);  // Alterna o estado de favoritado
    onFavorite(movie);  // Chama a função para lidar com a lógica do favorito
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-xs mx-auto bg-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Data de Lançamento: {movie.release_date}</p>

      <button
        onClick={handleFavoriteClick}
        className={`w-full py-2 px-4 rounded-lg text-white transition-colors duration-300 ${isMovieFavorited ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isMovieFavorited ? 'Remover dos Favoritos' : 'Favoritar'}
      </button>
    </div>
  );
};

export default MovieCard;
