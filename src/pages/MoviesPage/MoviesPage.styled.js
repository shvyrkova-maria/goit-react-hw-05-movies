import styled from '@emotion/styled/macro';

export const FormWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 25px;
  /* position: fixed; */
  position: sticky;
  top: 2%;
  /* left: 40%; */
  z-index: 770;
`;

export const SearchForm = styled.form`
  display: flex;
  min-width: 650px;
  text-align: center;
  border: 3px solid var(--accent-color);
  border-radius: 7px;
  overflow: hidden;
  & > input {
    width: 100%;
    padding-left: 8px;
    line-height: 1.2;
    color: var(--main-color);
    background-color: var(--base-color);
    background-color: white;
    outline: none;
    border: none;
  }
  & > button {
    padding: 8px;
    background-color: var(--accent-color);
    border: none;
    & > svg {
      display: flex;
      align-items: center;
      color: white;
    }
  }
`;
