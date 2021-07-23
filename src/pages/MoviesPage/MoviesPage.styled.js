import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  text-align: center;
  border: 1px solid red;
  padding: 3px;
  margin-bottom: 25px;
  & > input {
    width: 100%;
    outline: none;
    border: none;
  }
  & > button {
    border: none;
    background: none;
  }
`;
