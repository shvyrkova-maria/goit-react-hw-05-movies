import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { fetchTrendingMovies } from 'services/searchMoviesApi.js';
import Spinner from 'components/Spinner/Spinner.jsx';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import Pagination from 'components/Pagination/Pagination.jsx';
import { Status } from 'constants/requestStatus.js';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.PENDING);
  const location = useLocation();

  let page = Number(queryString.parse(location.search).page) || 1;

  useEffect(() => {
    async function getMovies() {
      try {
        const { results, total_pages } = await fetchTrendingMovies(page);
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.RESOLVED && (
        <Pagination pages={totalPages} page={page} />
      )}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </>
  );
}

export default HomePage;
