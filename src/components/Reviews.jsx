import React from 'react';
// import PropTypes from 'prop-types'

function Reviews({ movie }) {
  const reviews = movie.reviews.results;
  return (
    <>
      {reviews.length === 0 ? (
        "sorry, we haven't reviews"
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                  alt="review.author"
                  width="80"
                /> */}
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

// Reviews.propTypes = {

// }

export default Reviews;
