import React from 'react';
import {
  CastList,
  ActorImg,
  ActorName,
  Character,
} from 'components/Cast/Cast.styled.js';

// import PropTypes from 'prop-types'

function Cast({ movie }) {
  const cast = movie.credits.cast;

  return (
    <>
      <CastList>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <ActorImg
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <ActorName>{actor.name}</ActorName>
              <Character>
                Character: <span>{actor.character}</span>
              </Character>
            </li>
          );
        })}
      </CastList>
    </>
  );
}

// Cast.propTypes = {

// }

export default Cast;
