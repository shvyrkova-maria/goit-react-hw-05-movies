import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

const HomePage = lazy(() =>
  import('pages/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    'pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movie-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>LOADER WILL BE HERE</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
