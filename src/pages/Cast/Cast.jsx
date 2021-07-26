import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL } from 'constants/movieApi.js';
import defaultImage from 'image/user-placeholder.jpg';
import {
  CastList,
  ActorImg,
  ActorName,
  Character,
} from 'pages/Cast/Cast.styled';

function Cast({ movie }) {
  const cast = movie.credits.cast;

  return (
    <>
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => {
          const actor = profile_path
            ? `${IMG_URL}${profile_path}`
            : defaultImage;
          return (
            <li key={id}>
              <ActorImg src={actor} alt={name} />
              <ActorName>{name}</ActorName>
              <Character>{character}</Character>
            </li>
          );
        })}
      </CastList>
    </>
  );
}

Cast.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Cast;
