import { useState, useEffect } from 'react';
import { Route, NavLink, Switch, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/searchMoviesApi';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

// import PropTypes from 'prop-types'

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMoviesDetails(Number(movieId)).then(setMovie);
  }, [movieId]);
  console.log(movie.genres);
  return (
    <>
      <div>
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          width="100"
        /> */}

        <h2>{movie.original_title}</h2>
        <p>Score:{movie.vote_average}</p>
        <p>Overview:{movie.overview}</p>
        {/* <ul>
            {movie.genres.map(g => {
              return <li key={g.id}>{g.name}</li>;
            })}
          </ul> */}
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`/movies/${movieId}/cast`}>
          <Cast movie={movie} />
        </Route>
        <Route path={`/movies/${movieId}/reviews`}>
          <Reviews movie={movie} />
        </Route>
      </Switch>
    </>
  );
}

// MovieDetailsPage.propTypes = {

// }

export default MovieDetailsPage;
