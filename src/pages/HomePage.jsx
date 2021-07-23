import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/searchMoviesApi';
import MoviesList from 'components/MoviesList/MoviesList.jsx';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

function HomePage() {
  const [movies, setMovies] = useState([]);
  // const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    // if (movies.length !== 0) {
    //   return;
    // }
    fetchTrendingMovies().then(setMovies);
  }, []);

  return <MoviesList movies={movies} />;
}

export default HomePage;
