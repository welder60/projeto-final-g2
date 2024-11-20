import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { Movie } from '../types';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Tipagem do parâmetro da URL
  const [movie, setMovie] = useState<Movie | null>(null); // Estado para os detalhes do filme
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para controle de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para mensagem de erro

  useEffect(() => {
    if (!id) return; // Garante que o id está presente antes de buscar os detalhes

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id); // Obtém os detalhes diretamente
        setMovie(data); // Armazena os detalhes do filme no estado
      } catch (err) {
        console.error(err); // Log para desenvolvedores
        setError('Falha ao carregar os detalhes do filme. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false); // Finaliza o carregamento sempre
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Detalhes do filme não encontrados.</p>;

  return (
    <div className="movie-details max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full max-w-sm mb-4 rounded shadow-md"
      />
      <p className="mb-4">{movie.overview}</p>
      <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
      <p><strong>Nota:</strong> {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
