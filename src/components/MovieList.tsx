import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types'; // Certifique-se de ajustar o caminho corretamente

interface MovieListProps {
  movies: Movie[]; // Array de filmes
  onFavorite: (movie: Movie) => void; // Função que lida com favoritos
}

const MovieList: React.FC<MovieListProps> = ({ movies, onFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onFavorite={onFavorite}
          isFavorite={true} // Defina `true` ou `false` com base na lógica
        />
      ))}
    </div>
  );
};

export default MovieList;



