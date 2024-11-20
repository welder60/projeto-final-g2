import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();  // Obtém o id do filme da URL
  const [movie, setMovie] = useState(null);  // Estado para armazenar os detalhes do filme
  const [isLoading, setIsLoading] = useState(true);  // Estado para controlar o carregamento

  useEffect(() => {
    setIsLoading(true);  // Começa o carregamento
    getMovieDetails(id)
      .then((res) => {
        setMovie(res.data);  // Armazena os detalhes do filme no estado
        setIsLoading(false);  // Finaliza o carregamento
      })
      .catch((err) => {
        console.error(err);  // Exibe erro caso falhe na requisição
        setIsLoading(false);  // Finaliza o carregamento
      });
  }, [id]);  // A dependência id garante que a requisição seja feita toda vez que o id mudar

  if (isLoading) return <p>Carregando...</p>;  // Exibe mensagem de carregamento

  // Exibe o conteúdo quando os detalhes do filme são carregados
  return (
    <div className="movie-details">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full max-w-sm mb-4"
      />
      <p className="mb-4">{movie.overview}</p>
      <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
      <p><strong>Nota:</strong> {movie.vote_average}</p> {/* Corrigido para `movie.vote_average` */}
    </div>
  );
};

export default MovieDetails;
