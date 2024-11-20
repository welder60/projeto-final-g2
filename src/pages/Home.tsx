import { useState, useEffect } from 'react';
import { getMoviesByCategory } from '../services/api';
import MovieList from '../components/MovieList';
import { Movie } from '../types'; // Certifique-se de ajustar o caminho

const Home: React.FC = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
  const [moviesTopRated, setMoviesTopRated] = useState<Movie[]>([]);

  useEffect(() => {
  getMoviesByCategory('now_playing')
    .then((movies: Movie[]) => setMoviesNowPlaying(movies)) // Recebe diretamente o array de filmes
    .catch((err) => console.error(err));

  getMoviesByCategory('top_rated')
    .then((movies: Movie[]) => setMoviesTopRated(movies)) // Recebe diretamente o array de filmes
    .catch((err) => console.error(err));
}, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Filmes em Cartaz</h1>
      <MovieList movies={moviesNowPlaying} onFavorite={() => {}} />

      <h1 className="text-2xl font-bold mt-8 mb-4">Mais Bem Avaliados</h1>
      <MovieList movies={moviesTopRated} onFavorite={() => {}} />
    </div>
  );
};

export default Home;
