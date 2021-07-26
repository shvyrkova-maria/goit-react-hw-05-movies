import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const Нeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;

  z-index: 700;
  box-shadow: var(--main-shadow);
  background-color: #1f1b2e;
  margin-bottom: 25px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  color: Var(--base-color);
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
