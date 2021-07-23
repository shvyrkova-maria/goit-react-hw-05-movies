import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  text-transform: uppercase;
  color: grey;
  &:hover,
  &:focus {
    color: red;
  }
`;
