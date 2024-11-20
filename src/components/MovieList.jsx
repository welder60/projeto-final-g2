import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default MovieList;
