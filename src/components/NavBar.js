import React from 'react';
import { NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='menu'>
      <NavLink
        exact
        to='/goods'
        activeClassName='menu__link_active'
        className='menu__link'
      >
        Главная
      </NavLink>
      <NavLink
        to='/about'
        activeClassName='menu__link_active'
        className='menu__link'
      >
        О магазине
      </NavLink>
    </nav>
  );
};

export default NavBar;
