import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './CartTotal.css';

const CartTotal = () => {
  const { cartItems } = useContext(AppContext);
  const price = cartItems.reduce((sum, item) => sum + item.price, 0);

  return <p className='cart'>В корзине {cartItems.length} позиции на сумму {price} ₽</p>;
};

export default CartTotal;
