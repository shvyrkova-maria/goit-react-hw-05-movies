import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { IMG_URL } from 'constants/movieApi.js';
import defaultImage from 'image/card-placeholder.jpg';
import {
  MoviesGallery,
  MoviesItem,
  MoviePoster,
  MovieTitle,
} from 'components/MoviesList/MoviesList.styled';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <MoviesGallery>
      {movies.map(({ id, poster_path, title }) => {
        const poster = poster_path ? `${IMG_URL}${poster_path}` : defaultImage;
        return (
          <MoviesItem key={id}>
            <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
              <MoviePoster src={poster} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MoviesItem>
        );
      })}
    </MoviesGallery>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
