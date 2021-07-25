import { Link } from 'react-router-dom';
import { IMG_URL } from 'constants/movieApi.js';
import defaultImage from 'image/card-placeholder.jpg';
import {
  MoviesGallery,
  MoviePoster,
  MovieTitle,
} from 'components/MoviesList/MoviesList.styled.js';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  return (
    <MoviesGallery>
      {movies.map(({ id, poster_path, original_title }) => {
        const poster = poster_path ? `${IMG_URL}${poster_path}` : defaultImage;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <MoviePoster src={poster} alt={original_title} />
              <MovieTitle>{original_title}</MovieTitle>
            </Link>
          </li>
        );
      })}
    </MoviesGallery>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
