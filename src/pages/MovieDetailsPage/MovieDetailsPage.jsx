import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchMoviesDetails } from 'services/searchMoviesApi.js';
import { Status } from 'constants/requestStatus.js';
import { IMG_URL } from 'constants/movieApi.js';
import Spinner from 'components/Spinner/Spinner.jsx';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn.jsx';
import MovieDetailsNav from 'components/MovieDetailsNav/MovieDetailsNav.jsx';
import defaultImage from 'image/card-placeholder.jpg';
import {
  CardWrap,
  CardImg,
  DetailsWrap,
  Title,
  Details,
} from 'pages/MovieDetailsPage/MovieDetailsPage.styled.js';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    async function getMovie() {
      try {
        await fetchMoviesDetails(Number(movieId)).then(setMovie);
        setStatus(Status.RESOLVED);
      } catch (err) {
        setStatus(Status.REJECTED);
        toast.error(
          `${err.message}. 
          Redirected to the homepage.`,
        );
      }
    }
    getMovie();
  }, [movieId]);

  const poster =
    movie && movie.poster_path
      ? `${IMG_URL}${movie.poster_path}`
      : defaultImage;

  return (
    <>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && (
        <>
          <GoBackBtn />
          <CardWrap>
            <div>
              <CardImg src={poster} alt={movie.original_title} />
            </div>

            <DetailsWrap>
              <Title>{movie.original_title}</Title>

              <Details>
                Score: <span>{movie.vote_average}</span>
              </Details>
              <Details>
                Overview: <span>{movie.overview}</span>
              </Details>
              <Details>
                Genres:
                {movie.genres.map(g => {
                  return <span key={g.id}>{g.name}</span>;
                })}
              </Details>
            </DetailsWrap>
          </CardWrap>
          <MovieDetailsNav movie={movie} />
        </>
      )}

      {status === Status.REJECTED && <Redirect to="/" />}
    </>
  );
}

export default MovieDetailsPage;
