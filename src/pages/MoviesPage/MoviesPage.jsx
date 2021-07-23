import { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';

import { fetchMoviesByQuery } from 'services/searchMoviesApi';
import MoviesList from 'components/MoviesList/MoviesList.jsx';

import { SearchForm } from 'pages/MoviesPage/MoviesPage.styled.js';

// function MoviesPage() {
//   const [movies, setMovies] = useState([]);

//   const handleBtnClick = event => {
//     event.preventDefault();
//     const query = event.target.elements.search.value;
//     fetchMoviesByQuery(query).then(setMovies);
//   };

//   return (
//     <div>
//       <SearchForm onSubmit={handleBtnClick}>
//         <input type="text" name="search" />
//         <button type="submit">search</button>
//       </SearchForm>
//       <MoviesList movies={movies} />
//     </div>
//   );
// }

// export default MoviesPage;

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleBtnClick = event => {
    event.preventDefault();
    fetchMoviesByQuery(query).then(setMovies);
  };

  return (
    <div>
      <SearchForm onSubmit={handleBtnClick}>
        <input type="text" name="search" onChange={handleInputChange} />

        <button type="submit">
          search
          {/* <BsSearch size={18} /> */}
        </button>
      </SearchForm>
      <MoviesList movies={movies} query={query} />
    </div>
  );
}

export default MoviesPage;
