import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';

export const DetailsSubNav = styled.ul`
  display: flex;
  margin-bottom: 18px;
`;

export const NavItem = styled.li`
  width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  color: var(--base-color);
  &:hover {
    color: var(--accent-color);
  }
  &:focus {
    color: var(--accent-color);
    border-bottom: 3px solid var(--accent-color);
  }
`;
