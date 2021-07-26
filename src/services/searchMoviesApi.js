import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/movieApi.js';

axios.defaults.baseURL = BASE_URL;

export async function fetchTrendingMovies(page) {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}`,
  );
  return data;
}

export async function fetchMoviesByQuery(query, page) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`,
  );
  return data;
}

export async function fetchMoviesDetails(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits`,
  );
  return data;
}
