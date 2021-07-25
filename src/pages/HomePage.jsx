import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { fetchTrendingMovies } from 'services/searchMoviesApi.js';
import Spinner from 'components/Spinner/Spinner.jsx';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import Pagination from 'components/Pagination/Pagination.jsx';
import { Status } from 'constants/requestStatus.js';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(Status.PENDING);
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') || 1;

  useEffect(() => {
    async function getMovies() {
      try {
        await fetchTrendingMovies(Number(page)).then(
          ({ results, total_pages }) => {
            setMovies(results);
            setTotalPages(total_pages);
          },
        );
        setStatus(Status.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
      <Pagination pages={totalPages} />
    </>
  );
}

export default HomePage;
