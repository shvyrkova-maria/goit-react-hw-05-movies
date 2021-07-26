import styled from '@emotion/styled/macro';

export const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  background-color: rgba(30, 26, 45, 0.3);
  border-radius: 5px;
  cursor: pointer;

  color: white;

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    border: 1px solid var(--main-color);
    box-shadow: 5px 5px 5px -5px var(--main-color) inset;
  }
`;
