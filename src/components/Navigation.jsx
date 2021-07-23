import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={{ color: 'orange' }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" exact activeStyle={{ color: 'orange' }}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
