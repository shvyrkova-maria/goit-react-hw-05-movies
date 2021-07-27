import styled from '@emotion/styled/macro';

export const CardContainer = styled.div`
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
`;

export const CardWrap = styled.div`
  display: flex;
`;

export const CardImg = styled.img`
  width: 280px;
  border-radius: 10px;
  overflow: hidden;
`;

export const DetailsWrap = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 7px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--main-color);
`;

export const Details = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 700;
  color: var(--accent-color);
  & > span {
    font-weight: 400;
    padding-left: 5px;
    color: black;
  }
`;
