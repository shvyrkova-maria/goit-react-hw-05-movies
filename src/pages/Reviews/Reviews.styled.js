import styled from '@emotion/styled';

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ImgReviewer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

export const ReviewerName = styled.h2`
  font-size: 16px;
  text-transform: capitalize;
  color: var(--main-color);
  line-height: 1.2;
  text-align: left;
  font-weight: 700;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  color: black;
`;
