import styled from '@emotion/styled';

export const CardWrap = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid olive;
  border-radius: 10px;
`;

export const CardImg = styled.img`
  width: 280px;
  border-radius: 10px;
  overflow: hidden;
`;

export const DetailsWrap = styled.div`
  padding: 10px;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: grey;
`;

export const MovieDetails = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 400;
  color: red;
  & > span {
    padding-left: 5px;
    color: black;
  }
`;

export const DetailsSubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
  padding-bottom: 25px;
  & > li {
    font-weight: 700;
    text-transform: uppercase;
    color: grey;
    &:hover,
    &:focus {
      color: red;
    }
  }
`;