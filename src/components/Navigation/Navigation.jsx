import React from 'react';
import {
  NavList,
  NavListItem,
  NavLinkStyled,
} from 'components/Navigation/Navigation.styled.js';

function Navigation() {
  return (
    <header>
      <NavList>
        <NavListItem>
          <NavLinkStyled to="/" activeStyle={{ color: 'red' }} exact>
            Home
          </NavLinkStyled>
        </NavListItem>
        <NavListItem>
          <NavLinkStyled to="/movies" exact activeStyle={{ color: 'red' }}>
            Movies
          </NavLinkStyled>
        </NavListItem>
      </NavList>
    </header>
  );
}

export default Navigation;
