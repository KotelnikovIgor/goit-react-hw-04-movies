import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={routes.HOME}>Home page</NavLink>
      </li>
      <li>
        <NavLink to={routes.MOVIES}>Movies page</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
