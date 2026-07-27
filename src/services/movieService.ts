import axios from 'axios';
import type { Movie, MoviesResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!TMDB_TOKEN) {
    throw new Error('TMDB token is missing');
  }

  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  return response.data.results;
};
