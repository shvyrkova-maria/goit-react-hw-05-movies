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
  // console.log(response.data.results);
  return response.data.results;
}

export async function fetchMoviesDetails(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits`,
  );
  // console.log(data);
  return data;
}

// export async function fetchMoviesOverview(movieId) {
//   const response = await axios.get(
//     `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
//   );
//   console.log(response.data);
//   return response.data;
// }

// export async function fetchMoviesCast(movieId) {
//   const response = await axios.get(
//     `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
//   );
//   console.log(response.data.cast);
//   return response.data.cast;
// }

// export async function fetchMoviesReviews(movieId) {
//   const response = await axios.get(
//     `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   );
//   console.log(response.data.results);
//   return response.data.results;
// }
