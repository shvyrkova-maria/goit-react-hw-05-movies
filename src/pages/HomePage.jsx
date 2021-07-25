import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/searchMoviesApi';
import Spinner from 'components/Spinner/Spinner.jsx';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import { Status } from 'constants/requestStatus';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    async function getMovies() {
      try {
        await fetchTrendingMovies().then(setMovies);
        setStatus(Status.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </>
  );
}

export default HomePage;
