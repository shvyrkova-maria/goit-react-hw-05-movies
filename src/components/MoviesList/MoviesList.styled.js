import styled from '@emotion/styled/macro';

export const MoviesGallery = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
`;

export const MoviesItem = styled.li`
  background-color: var(--main-color-light);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: var(--accent-shadow);
  }
`;

export const MovieTitle = styled.h2`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
`;
export const MoviePoster = styled.img`
  height: 375px;
`;
