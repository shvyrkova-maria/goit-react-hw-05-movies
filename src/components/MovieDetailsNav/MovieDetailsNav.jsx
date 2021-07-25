import { lazy, Suspense } from 'react';
import { Route, NavLink, Switch, useRouteMatch } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner.jsx';
import { DetailsSubNav } from 'components/MovieDetailsNav/MovieDetailsNav.styled.js';

const Cast = lazy(() =>
  import('pages/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
);

function MovieDetailsNav({ movie }) {
  const { path, url } = useRouteMatch();
  return (
    <div>
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

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>{movie && <Cast movie={movie} />}</Route>
          <Route path={`${path}/reviews`}>
            {movie && <Reviews movie={movie} />}
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default MovieDetailsNav;
