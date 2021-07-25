import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner.jsx';
import Toast from 'components/Toast/Toast.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import { Container } from 'components/Container/Container.styled';

const HomePage = lazy(() =>
  import('pages/HomePage.jsx' /* webpackChunkName: "home" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movie" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details" */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Spinner />}>
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
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
      <Toast />
    </Container>
  );
}

export default App;
