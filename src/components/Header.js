import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import CartTotal from './CartTotal';
import {
  setCurrentUser,
  setPopupActive,
  clearCartItems,
} from './redux/actions';
import './Header.css';

const Header = ({
  setPopupActive,
  currentUser,
  setCurrentUser,
  clearCartItems,
}) => {
  return (
    <header>
      <div className='user'>
        {currentUser ? (
          <button
            className='login'
            onClick={() => {
              setCurrentUser(null);
              clearCartItems();
            }}
          >
            Выход
          </button>
        ) : (
          <button className='login' onClick={() => setPopupActive(true)}>
            Вход
          </button>
        )}
      </div>
      <div className='main-info'>
        <h1 className='logo'>Грядка мечты</h1>
        <NavBar />
        {currentUser ? (
          <NavLink
            exact
            to='/cart'
            activeClassName='cart__link_active'
            className='cart__link'
          >
            <CartTotal />{' '}
          </NavLink>
        ) : (
          <p> Войдите, чтобы увидеть корзину</p>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = {
  setPopupActive,
  setCurrentUser,
  clearCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
