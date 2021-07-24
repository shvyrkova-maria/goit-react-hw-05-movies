import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  text-align: center;
  border: 1px solid red;
  padding: 3px;
  margin-bottom: 25px;
  & > input {
    width: 100%;
    line-height: 1.2;
    outline: none;
    border: none;
    color: white;
    background-color: transparent;
  }
  & > button {
    border: none;
    background: none;
    & > svg {
      color: white;
    }
  }
`;
