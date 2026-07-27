import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';

import { fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';

import css from './App.module.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string): Promise<void> => {
    // Очищаем предыдущий поиск
    setMovies([]);
    setSelectedMovie(null);

    try {
      setIsLoading(true);

      const data = await fetchMovies(query);

      if (data.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }

      setMovies(data);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectMovie = (movie: Movie): void => {
    setSelectedMovie(movie);
    console.log(movie);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      {isLoading && <p>Loading...</p>}

      <MovieGrid movies={movies} onSelect={handleSelectMovie} />

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
