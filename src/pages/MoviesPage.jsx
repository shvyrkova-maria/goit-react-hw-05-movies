import { useState } from 'react';
import { fetchMoviesByQuery } from 'services/searchMoviesApi';
import MoviesList from 'components/MoviesList';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); //удалить

  const handleInputChange = event => {
    setQuery(event.target.value);
    // сonsole.log(event.target.elements.search.value);
  };

  const handleBtnClick = event => {
    event.preventDefault();
    fetchMoviesByQuery(query).then(setMovies);
  };

  return (
    <div>
      <form onSubmit={handleBtnClick}>
        <input type="text" name="search" onChange={handleInputChange} />
        {/* удалить onChange  чтобы не перезагружалась*/}
        <button type="submit">search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
}

export default MoviesPage;
