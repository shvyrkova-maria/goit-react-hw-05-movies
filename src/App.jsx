import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Navigation from 'components/Navigation/Navigation';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Container } from 'components/Container/Container.styled';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
