// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router-dom';

import {
  MoviesGallery,
  MoviePoster,
  MovieTitle,
} from 'components/MoviesList/MoviesList.styled.js';
// import PropTypes from 'prop-types'

function MoviesList({ movies }) {
  // let location = useLocation();
  // console.log(location);

  return (
    <MoviesGallery>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                // state: query,
              }}
            >
              {/* <Link to={`/movies/${movie.id}`}> */}
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                id={movie.id}
              />

              <MovieTitle>{movie.original_title}</MovieTitle>
            </Link>
          </li>
        );
      })}
    </MoviesGallery>
  );
}

// MoviesList.propTypes = {

// }
export default MoviesList;
