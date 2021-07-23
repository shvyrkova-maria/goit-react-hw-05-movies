import { Link, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types'

function MoviesList({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${url}/${movie.id}`}>
              {/* <Link to={pathname:}></Link> */}
              {/* <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                id={movie.id}
                width="100"
              /> */}

              <h2>{movie.original_title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// MoviesList.propTypes = {

// }

export default MoviesList;
