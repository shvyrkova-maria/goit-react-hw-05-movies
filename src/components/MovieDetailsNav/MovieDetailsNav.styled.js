import styled from '@emotion/styled';

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
