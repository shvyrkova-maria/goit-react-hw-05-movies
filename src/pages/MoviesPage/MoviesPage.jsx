import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { fetchMoviesByQuery } from 'services/searchMoviesApi';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import { SearchForm } from 'pages/MoviesPage/MoviesPage.styled.js';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

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

  //=================================== v2
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) return;
    fetchMoviesByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);
  //=================================== v2

  const handleBtnClick = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    if (!searchQuery) {
      alert('Enter movie name');
      return;
    }
    fetchMoviesByQuery(searchQuery).then(setMovies);
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
      <MoviesList movies={movies} />
    </div>
  );
}

export default MoviesPage;
