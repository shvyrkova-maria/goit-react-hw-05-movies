import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Navigation from 'components/Navigation';
import MovieDetailsPage from 'pages/MovieDetailsPage';

function App() {
  return (
    <>
      <Navigation />
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
    </>
  );
}

export default App;
