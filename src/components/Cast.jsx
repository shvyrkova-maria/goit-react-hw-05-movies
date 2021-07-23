import React from 'react';
// import PropTypes from 'prop-types'

function Cast({ movie }) {
  const cast = movie.credits.cast;

  return (
    <>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>Character:{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Cast.propTypes = {

// }

export default Cast;
