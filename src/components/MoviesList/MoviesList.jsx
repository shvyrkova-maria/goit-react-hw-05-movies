import { Link } from 'react-router-dom';
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
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
              />
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
