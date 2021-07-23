import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  & > li {
    width: 100%;
    height: 280px;
    text-align: center;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const ActorImg = styled.img`
  display: inline-block;
  max-width: 200px;
  height: 200px;
  margin-bottom: 5px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ActorName = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  text-align: left;
  font-weight: 700;
`;

export const Character = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  & > span {
    margin-left: 5px;
  }
`;
