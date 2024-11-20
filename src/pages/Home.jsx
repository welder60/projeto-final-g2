import React, { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../services/api';
import MovieList from '../components/MovieList';

const Home = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);

  useEffect(() => {
    getMoviesByCategory('now_playing')
      .then((res) => setMoviesNowPlaying(res.data.results))
      .catch((err) => console.error(err));

    getMoviesByCategory('top_rated')
      .then((res) => setMoviesTopRated(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Filmes em Cartaz</h1>
      <MovieList movies={moviesNowPlaying} />

      <h1 className="text-2xl font-bold mt-8 mb-4">Mais Bem Avaliados</h1>
      <MovieList movies={moviesTopRated} />
    </div>
  );
};

export default Home;
