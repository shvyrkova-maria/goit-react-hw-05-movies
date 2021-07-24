import React from 'react';
import PropTypes from 'prop-types';
import {
  CastList,
  ActorImg,
  ActorName,
  Character,
} from 'components/Cast/Cast.styled.js';

function Cast({ movie }) {
  const cast = movie.credits.cast;

  return (
    <>
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <ActorImg
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <ActorName>{name}</ActorName>
              <Character>
                Character: <span>{character}</span>
              </Character>
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
