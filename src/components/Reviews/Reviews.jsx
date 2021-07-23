import React from 'react';
import {
  ContentWrap,
  ImgReviewer,
  ReviewItem,
  ReviewText,
  ReviewerName,
} from 'components/Reviews/Reviews.styled.js';
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
              <ReviewItem key={review.id}>
                <ContentWrap>
                  <ImgReviewer
                    src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                    alt={review.author}
                  />
                  <ReviewerName>{review.author}</ReviewerName>
                  {/* <p>{Date(review.created_at)}</p> */}
                </ContentWrap>

                <ReviewText>{review.content}</ReviewText>
              </ReviewItem>
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
