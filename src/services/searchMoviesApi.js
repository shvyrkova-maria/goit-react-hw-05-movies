import axios from 'axios';

const API_KEY = '2f8d6050c74d5f454a522d74a8cedbb8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
  return response.data.results;
}

export async function fetchMoviesDetails(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits`,
  );
  return data;
}
