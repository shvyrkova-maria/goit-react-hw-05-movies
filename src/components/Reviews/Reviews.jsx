import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrap,
  ImgReviewer,
  ReviewItem,
  ReviewText,
  ReviewerName,
} from 'components/Reviews/Reviews.styled.js';

function Reviews({ movie }) {
  const reviews = movie.reviews.results;
  return (
    <>
      {reviews.length === 0 ? (
        "This movie haven't reviews yet"
      ) : (
        <ul>
          {reviews.map(({ id, author, author_details, content }) => {
            return (
              <ReviewItem key={id}>
                <ContentWrap>
                  <ImgReviewer
                    src={`https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`}
                    alt={author}
                  />
                  <ReviewerName>{author}</ReviewerName>
                </ContentWrap>

                <ReviewText>{content}</ReviewText>
              </ReviewItem>
            );
          })}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Reviews;
