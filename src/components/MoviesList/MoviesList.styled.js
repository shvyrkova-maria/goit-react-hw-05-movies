import styled from '@emotion/styled';

export const MoviesGallery = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
`;

export const MovieTitle = styled.h2`
  padding: 5px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: grey;
`;
export const MoviePoster = styled.img`
  height: 397px;
  /* object-fit: cover; */
`;
