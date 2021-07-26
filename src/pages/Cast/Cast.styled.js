import styled from '@emotion/styled/macro';

export const CastList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  & > li {
    max-width: 250px;
    height: 100%;
    text-align: center;
    border: 1px solid var(--main-color);
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const ActorImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 250px;
  margin-bottom: 5px;
  object-fit: cover;
`;

export const ActorName = styled.h2`
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 3px;
  font-size: 16px;
  line-height: 1.2;
  text-align: left;
  font-weight: 700;
`;

export const Character = styled.p`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  & > span {
    margin-left: 5px;
  }
`;
