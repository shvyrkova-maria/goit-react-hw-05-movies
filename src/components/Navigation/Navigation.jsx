import {
  NavList,
  NavListItem,
  NavLinkStyled,
  Нeader,
} from 'components/Navigation/Navigation.styled.js';
import { Container } from 'components/Container/Container.styled.js';

function Navigation() {
  return (
    <Нeader>
      <Container>
        <NavList>
          <NavListItem>
            <NavLinkStyled to="/" activeStyle={{ color: '#ea0042' }} exact>
              Home
            </NavLinkStyled>
          </NavListItem>
          <NavListItem>
            <NavLinkStyled to="/movies" activeStyle={{ color: '#ea0042' }}>
              Movies
            </NavLinkStyled>
          </NavListItem>
        </NavList>
      </Container>
    </Нeader>
  );
}

export default Navigation;
