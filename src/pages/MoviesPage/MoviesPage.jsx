import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import { fetchMoviesByQuery } from 'services/searchMoviesApi.js';
import Spinner from 'components/Spinner/Spinner.jsx';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import { Status } from 'constants/requestStatus.js';
import { SearchForm } from 'pages/MoviesPage/MoviesPage.styled.js';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  const history = useHistory();
  const location = useLocation();

  //=================================== v2
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) return;
    setStatus(Status.PENDING);
    async function getMovies() {
      try {
        await fetchMoviesByQuery(searchQuery).then(movies => {
          if (movies.length === 0) toast.error('No matches');
          setMovies(movies);
        });
        setStatus(Status.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
  }, [searchQuery]);
  //=================================== v2

  const handleBtnClick = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    if (!searchQuery) {
      toast.error('Enter movie name');
      return;
    }
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  return (
    <div>
      <SearchForm onSubmit={handleBtnClick}>
        <input type="text" name="search" autoFocus placeholder="Search movie" />
        <button type="submit">
          <BsSearch size={18} />
        </button>
      </SearchForm>

      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </div>
  );
}

export default MoviesPage;

//=================================== v1
// useEffect(() => {
//   const { search } = location;
//   if (!search) return;

//   if (search) {
//     const searchQuery = new URLSearchParams(search).get('query');
//     fetchMoviesByQuery(searchQuery).then(setMovies);
//   }
// }, [location]);
//=================================== v1
