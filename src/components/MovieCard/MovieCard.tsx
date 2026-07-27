import type { Movie } from '../../types/movie';
import css from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <div className={css.card} onClick={() => onSelect(movie)}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />

      <h2 className={css.title}>{movie.title}</h2>
    </div>
  );
}

export default MovieCard;
