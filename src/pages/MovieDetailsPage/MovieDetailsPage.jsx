import { useState, useEffect } from 'react';
import {
  Route,
  NavLink,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { fetchMoviesDetails } from 'services/searchMoviesApi';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn.jsx';
import Cast from 'components/Cast/Cast.jsx';
import Reviews from 'components/Reviews/Reviews.jsx';

import {
  CardWrap,
  CardImg,
  DetailsWrap,
  MovieTitle,
  MovieDetails,
  DetailsSubNav,
} from 'pages/MovieDetailsPage/MovieDetailsPage.styled.js';

// import PropTypes from 'prop-types'

function MovieDetailsPage(props) {
  const { path, url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesDetails(Number(movieId)).then(setMovie);
  }, [movieId]);

  return (
    <>
      <GoBackBtn />
      {movie && (
        <CardWrap>
          <div>
            <CardImg
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>

          <DetailsWrap>
            <MovieTitle>{movie.original_title}</MovieTitle>
            <MovieDetails>
              Score:
              <span>{movie.vote_average}</span>
            </MovieDetails>

            <MovieDetails>
              Overview:
              <span>{movie.overview}</span>
            </MovieDetails>

            <MovieDetails>
              Genres:
              {movie.genres.map(g => {
                return <span key={g.id}>{g.name}</span>;
              })}
            </MovieDetails>
          </DetailsWrap>
        </CardWrap>
      )}

      <DetailsSubNav>
        <li>
          <NavLink to={`${url}/cast`} activeStyle={{ color: 'red' }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`} activeStyle={{ color: 'red' }}>
            Reviews
          </NavLink>
        </li>
      </DetailsSubNav>

      <Switch>
        <Route path={`${path}/cast`}>{movie && <Cast movie={movie} />}</Route>
        <Route path={`${path}/reviews`}>
          {movie && <Reviews movie={movie} />}
        </Route>
      </Switch>
    </>
  );
}

// MovieDetailsPage.propTypes = {

// }

export default MovieDetailsPage;
