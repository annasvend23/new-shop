import React, { useContext } from 'react';
import NavBar from './NavBar';
import CartTotal from './CartTotal';
import { AppContext } from './AppContext';
import './Header.css';

const Header = () => {
  const { setPopupActive, currentUser, setCurrentUser } = useContext(AppContext);
  return (
    <header>
      <div className='user'>
        { currentUser ? (
          <button className='login' onClick={() => setCurrentUser(null)}>
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
        { currentUser ? (
          <CartTotal />
        ) : (
          <p> Войдите, чтобы увидеть корзину</p>
        )}
      </div>
    </header>
  );
};

export default Header;
