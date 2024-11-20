import MovieCard from './MovieCard';
import { Movie } from '../types';

interface FavoritesListProps {
  favorites: Movie[];
  onRemoveFavorite: (movieId: number) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Seus Favoritos</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={() => onRemoveFavorite(movie.id)} // Extraindo o ID do objeto Movie
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p>Você ainda não adicionou filmes aos favoritos.</p>
      )}
    </div>
  );
};

export default FavoritesList;
