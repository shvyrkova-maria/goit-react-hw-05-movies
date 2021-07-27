import { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner.jsx';
import {
  DetailsSubNav,
  NavItem,
  NavLinkStyled,
} from 'components/MovieDetailsNav/MovieDetailsNav.styled';

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
        <NavItem>
          <NavLinkStyled
            to={`${url}/cast`}
            activeStyle={{
              color: '#ea0042',
              borderBottom: '3px solid var(--accent-color)',
            }}
          >
            Cast
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled
            to={`${url}/reviews`}
            activeStyle={{
              color: '#ea0042',
              borderBottom: '3px solid var(--accent-color)',
            }}
          >
            Reviews
          </NavLinkStyled>
        </NavItem>
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
