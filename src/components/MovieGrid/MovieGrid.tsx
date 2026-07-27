import type { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (movies.length === 0) {
    return null;
  }

  return (
    <ul className={css.grid}>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}

export default MovieGrid;
